"use client"

import { useState, FormEvent } from "react"
import { Paperclip, Mic, CornerDownLeft } from "lucide-react"
import { Button } from "./ui/button"
import {
  ChatBubble,
  ChatBubbleMessage,
} from "./ui/chat-bubble"
import { ChatInput } from "./ui/chat-input"
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "./ui/expandable-chat"
import { ChatMessageList } from "./ui/chat-message-list"
import chatIcon from 'figma:asset/326f260239805f33c7580f677fb3589bb5334b10.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ExpandableChatDemo() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Olá! Sou a Lize, sua assistente de aprendizado! Como posso ajudar você hoje? 🦜",
      sender: "ai",
    },
  ])

  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const updatedMessages = [
      ...messages,
      {
        id: messages.length + 1,
        content: input,
        sender: "user",
      },
    ]

    setMessages(updatedMessages)
    setInput("")
    setIsLoading(true)

    // Converte pro formato que a OpenAI espera
    const fullMessages = updatedMessages
      .filter(msg => msg.content && msg.content.trim() !== "")
      .map(msg => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: String(msg.content),
      }))

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: fullMessages }),
      })

      const data = await response.json()

      // adiciona resposta da AI no chat
      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 1,
          content: data.response || "Tive um problema pra responder 🥲",
          sender: "ai",
        },
      ])
    } catch (error) {
      console.error("Erro:", error)

      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 1,
          content: "Tive um problema pra responder agora 🥲 tenta de novo!",
          sender: "ai",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as any)
    }
  }

  return (
    <ExpandableChat
       size="lg"
        position="bottom-right"
        icon={
          <div
            onClick={() => window.location.href = "https://lize.vercel.app/"}
            className="cursor-pointer"
          >
            <ImageWithFallback 
              src={chatIcon} 
              alt="Chat com Lize" 
              className="h-10 w-10 object-contain" 
            />
          </div>
        }
        className="[&>button]:bg-gray-900 [&>button]:shadow-2xl [&>button]:hover:bg-gray-800 [&>button]:w-20 [&>button]:h-20 [&>button]:rounded-full"
  >

      <ExpandableChatBody>
        <ChatMessageList>
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.sender === "user" ? "sent" : "received"}
            >
              <ChatBubbleMessage variant={message.sender === "user" ? "sent" : "received"}>
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}

          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
      </ExpandableChatBody>

      <ExpandableChatFooter>
        <form
          onSubmit={handleSubmit}
          className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
        >
          <ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
            onKeyDown={handleKeyDown}
          />

          <div className="flex items-center p-3 pt-0 justify-between">
            <div className="flex">
              <Button variant="ghost" size="icon" type="button">
                <Paperclip className="size-4" />
              </Button>

              <Button variant="ghost" size="icon" type="button">
                <Mic className="size-4" />
              </Button>
            </div>

            <Button type="submit" size="sm" className="ml-auto gap-1.5 bg-[#3283FF] hover:bg-[#3283FF]/90">
              Enviar
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>
  )
}

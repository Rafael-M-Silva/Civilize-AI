"use client"

import { useState, FormEvent } from "react"
import { Send, Bot, Paperclip, Mic, CornerDownLeft } from "lucide-react"
import { Button } from "./ui/button"
import {
  ChatBubble,
  ChatBubbleAvatar,
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        content: input,
        sender: "user",
      },
    ])
    setInput("")
    setIsLoading(true)

    setTimeout(() => {
      // Respostas contextualizadas baseadas na pergunta
      const userMessage = input.toLowerCase();
      let response = "Essa é uma ótima pergunta! Estou aqui para ajudar no seu aprendizado. 🎓";
      
      if (userMessage.includes("curso") || userMessage.includes("aula")) {
        response = "Temos diversos cursos disponíveis sobre cidadania e direitos! Você pode encontrá-los no menu de Cursos. 📚";
      } else if (userMessage.includes("xp") || userMessage.includes("pontos")) {
        response = "Você ganha XP ao completar aulas e responder quizzes corretamente! Quanto mais você aprende, mais pontos acumula! ⭐";
      } else if (userMessage.includes("badge") || userMessage.includes("conquista")) {
        response = "As badges são conquistas especiais que você desbloqueia ao atingir marcos importantes. Confira seu perfil para ver todas! 🏆";
      } else if (userMessage.includes("ranking") || userMessage.includes("posição")) {
        response = "O ranking mostra sua posição entre outros estudantes. Continue estudando para subir de posição! 🚀";
      } else if (userMessage.includes("ajuda") || userMessage.includes("dúvida")) {
        response = "Estou aqui para ajudar! Pode me perguntar sobre cursos, XP, badges, ranking ou qualquer dúvida sobre a plataforma. 💡";
      }
      
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: response,
          sender: "ai",
        },
      ])
      setIsLoading(false)
    }, 1000)
  }

  const handleAttachFile = () => {
    // Funcionalidade de anexar arquivo
  }

  const handleMicrophoneClick = () => {
    // Funcionalidade de microfone
  }

  return (
    <ExpandableChat
      size="lg"
      position="bottom-right"
      icon={<Bot className="h-6 w-6" />}
    >
      <ExpandableChatHeader className="flex-col text-center justify-center bg-gradient-to-r from-[#3283FF] to-[#6E9DED]">
        <h1 className="text-xl font-semibold text-white">Chat com Lize ✨</h1>
        <p className="text-sm text-white/90">
          Sua assistente de aprendizado
        </p>
      </ExpandableChatHeader>

      <ExpandableChatBody>
        <ChatMessageList>
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.sender === "user" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                src={
                  message.sender === "user"
                    ? ""
                    : ""
                }
                fallback={message.sender === "user" ? "VC" : "🦜"}
              />
              <ChatBubbleMessage
                variant={message.sender === "user" ? "sent" : "received"}
              >
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}

          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                fallback="🦜"
              />
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
          />
          <div className="flex items-center p-3 pt-0 justify-between">
            <div className="flex">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleAttachFile}
              >
                <Paperclip className="size-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleMicrophoneClick}
              >
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

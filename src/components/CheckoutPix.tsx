import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { ArrowLeft, Copy, Check, QrCode } from 'lucide-react';
import { PricingTier } from './ui/creative-pricing';
import lizeCoinIcon from 'figma:asset/085fc565bb4f512d3e3f3cfb35b8d2b508a6879f.png';
import qrCodeImage from 'figma:asset/f4ac4dfbe21d5209415d9cc65041d94219fe3ef9.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CheckoutPixProps {
  package: PricingTier;
  userName: string;
  userEmail: string;
  onCoinsAdded?: (coins: number) => void;
  onClose?: () => void;
}

export function CheckoutPix({ 
  package: selectedPackage, 
  userName, 
  userEmail,
  onCoinsAdded,
  onClose
}: CheckoutPixProps) {
  const [pixGenerated, setPixGenerated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showBackButton, setShowBackButton] = useState(true);
  
  // Gera um código PIX simulado
  const pixCode = `00020126580014br.gov.bcb.pix0136${Math.random().toString(36).substring(2, 38)}52040000530398654${selectedPackage.price.toFixed(2)}5802BR5925CIVILIZE AI LTDA6009SAO PAULO62070503***6304${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

  const handleGeneratePixCode = () => {
    setPixGenerated(true);
    setShowBackButton(false);
  };

  const handleCopyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmPayment = () => {
    // Simula pagamento confirmado
    if (onCoinsAdded) {
      onCoinsAdded(selectedPackage.coins);
    }
    // Fechar o modal após um pequeno delay
    setTimeout(() => {
      if (onClose) {
        onClose();
      }
    }, 1500);
  };

  if (pixGenerated) {
    return (
      <div className="w-full max-w-2xl mx-auto space-y-6">
        {showBackButton && (
          <Button
            variant="ghost"
            onClick={() => setShowBackButton(true)}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        )}

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <QrCode className="h-6 w-6 text-[#3283FF]" />
              Pague com PIX
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* QR Code Simulado */}
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-white border-4 border-zinc-200 rounded-lg flex items-center justify-center p-2">
                <ImageWithFallback 
                  src={qrCodeImage} 
                  alt="QR Code PIX" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Instruções */}
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg space-y-2">
              <p className="font-medium text-sm">Como pagar:</p>
              <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                <li>Abra o app do seu banco</li>
                <li>Escolha pagar via PIX</li>
                <li>Escaneie o QR Code ou copie o código</li>
                <li>Confirme o pagamento</li>
              </ol>
            </div>

            {/* Código PIX */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Código PIX Copia e Cola:</p>
              <div className="flex gap-2">
                <div className="flex-1 p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg font-mono text-xs break-all">
                  {pixCode}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleCopyPixCode}
                  className="shrink-0"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Valor */}
            <div className="text-center space-y-1">
              <p className="text-sm text-muted-foreground">Valor a pagar</p>
              <p className="text-3xl font-bold">R$ {selectedPackage.price.toFixed(2)}</p>
            </div>

            <Separator />

            {/* Botão simulando pagamento confirmado */}
            <div className="space-y-2">
              <p className="text-xs text-center text-muted-foreground">
                Aguardando pagamento...
              </p>
              <Button
                onClick={handleConfirmPayment}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Simular Pagamento Confirmado
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                (Em produção, isso seria automático após o pagamento)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Button
        variant="ghost"
        onClick={() => setShowBackButton(true)}
        className="mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar
      </Button>

      {/* Resumo da Compra */}
      <Card>
        <CardHeader>
          <CardTitle>Resumo da Compra</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Dados do Usuário */}
          <div className="space-y-2">
            <h3 className="font-medium">Dados do Comprador</h3>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg space-y-1">
              <p className="text-sm">
                <span className="text-muted-foreground">Nome:</span> {userName}
              </p>
              <p className="text-sm">
                <span className="text-muted-foreground">Email:</span> {userEmail}
              </p>
            </div>
          </div>

          <Separator />

          {/* Produto */}
          <div className="space-y-2">
            <h3 className="font-medium">O que você está comprando</h3>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {selectedPackage.icon}
                  <div>
                    <p className="font-medium">{selectedPackage.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedPackage.description}
                    </p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <ImageWithFallback 
                      src={lizeCoinIcon} 
                      alt="LizeCoin" 
                      className="h-4 w-4" 
                    />
                    {selectedPackage.coins} LizeCoins
                  </span>
                  <span className="font-medium">R$ {selectedPackage.price.toFixed(2)}</span>
                </div>
                
                {selectedPackage.features.slice(1).map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          {/* Total */}
          <div className="flex items-center justify-between">
            <span className="font-medium text-lg">Total</span>
            <span className="font-bold text-2xl">R$ {selectedPackage.price.toFixed(2)}</span>
          </div>

          {/* Botão Confirmar */}
          <Button
            onClick={handleGeneratePixCode}
            className="w-full bg-[#3283FF] hover:bg-[#2568D6] text-white h-12"
            size="lg"
          >
            Gerar Código PIX
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Ao confirmar, você será redirecionado para a tela de pagamento PIX
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
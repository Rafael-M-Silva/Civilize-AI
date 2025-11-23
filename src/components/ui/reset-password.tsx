import React, { useState } from 'react';
import { ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';

// --- TYPE DEFINITIONS ---

export interface Testimonial {
  avatarSrc: string;
  name: string;
  handle: string;
  text: string;
}

interface ResetPasswordPageProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  heroImageSrc?: string;
  testimonials?: Testimonial[];
  onResetPassword?: (email: string) => void;
  onBackToLogin?: () => void;
}

// --- SUB-COMPONENTS ---

const GlassInputWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border-2 border-border bg-foreground/5 backdrop-blur-sm transition-colors focus-within:border-violet-400 focus-within:bg-violet-500/10">
    {children}
  </div>
);

const TestimonialCard = ({ testimonial, delay }: { testimonial: Testimonial, delay: string }) => (
  <div className={`animate-testimonial ${delay} flex items-start gap-3 rounded-3xl bg-card/40 dark:bg-zinc-800/40 backdrop-blur-xl border border-white/10 p-5 w-64`}>
    <img src={testimonial.avatarSrc} className="h-10 w-10 object-cover rounded-2xl" alt="avatar" />
    <div className="text-sm leading-snug">
      <p className="flex items-center gap-1 font-medium">{testimonial.name}</p>
      <p className="text-muted-foreground">{testimonial.handle}</p>
      <p className="mt-1 text-foreground/80">{testimonial.text}</p>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

export const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({
  title = <span className="font-light text-foreground tracking-tighter">Redefinir <span className="font-semibold">Senha</span></span>,
  description = "Enviaremos um link de redefinição para o seu e-mail",
  heroImageSrc,
  testimonials = [],
  onResetPassword,
  onBackToLogin,
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onResetPassword?.(email);
    setIsSubmitted(true);
  };

  return (
    <div className="h-[100dvh] flex flex-col md:flex-row font-geist w-[100dvw]">
      {/* Left column: reset password form */}
      <section className="flex-1 flex items-center justify-center p-8 hide-scrollbar overflow-y-auto relative">
        {/* Back to Login button */}
        {onBackToLogin && (
          <button
            onClick={onBackToLogin}
            className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Voltar para Login</span>
          </button>
        )}
        
        <div className="w-full max-w-md">
          {!isSubmitted ? (
            <div className="flex flex-col gap-6">
              <div className="animate-element animate-delay-100 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="animate-element animate-delay-200 text-4xl md:text-5xl font-semibold leading-tight">{title}</h1>
              <p className="animate-element animate-delay-300 text-muted-foreground">{description}</p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="animate-element animate-delay-400">
                  <label className="text-sm font-medium text-muted-foreground">Endereço de e-mail</label>
                  <GlassInputWrapper>
                    <input 
                      name="email" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Digite seu endereço de e-mail" 
                      className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none"
                      required
                    />
                  </GlassInputWrapper>
                </div>

                <button 
                  type="submit" 
                  className="animate-element animate-delay-500 w-full rounded-2xl bg-primary py-4 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Enviar link de redefinição
                </button>
              </form>

              <p className="animate-element animate-delay-600 text-center text-sm text-muted-foreground">
                Lembrou sua senha? <a href="#" onClick={(e) => { e.preventDefault(); onBackToLogin?.(); }} className="text-violet-400 hover:underline transition-colors">Voltar para login</a>
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6 text-center">
              <div className="animate-element animate-delay-100 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="animate-element animate-delay-200 text-4xl md:text-5xl font-semibold leading-tight">
                E-mail enviado! 📧
              </h1>
              
              <p className="animate-element animate-delay-300 text-muted-foreground">
                Enviamos um link de redefinição de senha para <span className="font-semibold text-foreground">{email}</span>
              </p>
              
              <p className="animate-element animate-delay-400 text-sm text-muted-foreground">
                Verifique sua caixa de entrada e clique no link para redefinir sua senha. O link expira em 24 horas.
              </p>

              <button 
                onClick={onBackToLogin}
                className="animate-element animate-delay-500 w-full rounded-2xl bg-primary py-4 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Voltar para Login
              </button>

              <p className="animate-element animate-delay-600 text-center text-sm text-muted-foreground">
                Não recebeu o e-mail? <a href="#" onClick={(e) => { e.preventDefault(); setIsSubmitted(false); }} className="text-violet-400 hover:underline transition-colors">Reenviar</a>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Right column: hero image + testimonials */}
      {heroImageSrc && (
        <section className="hidden md:block flex-1 relative p-4">
          <div className="animate-slide-right animate-delay-300 absolute inset-4 rounded-3xl bg-cover bg-center" style={{ backgroundImage: `url(${heroImageSrc})` }}></div>
          {testimonials.length > 0 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 px-8 w-full justify-center">
              <TestimonialCard testimonial={testimonials[0]} delay="animate-delay-1000" />
              {testimonials[1] && <div className="hidden xl:flex"><TestimonialCard testimonial={testimonials[1]} delay="animate-delay-1200" /></div>}
              {testimonials[2] && <div className="hidden 2xl:flex"><TestimonialCard testimonial={testimonials[2]} delay="animate-delay-1400" /></div>}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

// --- HELPER COMPONENTS (ICONS) ---

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z" />
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z" />
    </svg>
);


// --- TYPE DEFINITIONS ---

export interface Testimonial {
  avatarSrc: string;
  name: string;
  handle: string;
  text: string;
}

interface SignUpPageProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  heroImageSrc?: string;
  testimonials?: Testimonial[];
  onSignUp?: (event: React.FormEvent<HTMLFormElement>) => void;
  onGoogleSignUp?: () => void;
  onSignInRedirect?: () => void;
  onBackToHome?: () => void;
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

export const SignUpPage: React.FC<SignUpPageProps> = ({
  title = <span className="font-light text-foreground tracking-tighter">Create Account</span>,
  description = "Start your learning journey with us today",
  heroImageSrc,
  testimonials = [],
  onSignUp,
  onGoogleSignUp,
  onSignInRedirect,
  onBackToHome,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
    minLength: false,
  });

  // Password strength checker
  const checkPasswordStrength = (pwd: string) => {
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasLowerCase = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecialChar = /[!?#*@]/.test(pwd);
    const minLength = pwd.length >= 8;

    const score = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar, minLength].filter(Boolean).length;

    setPasswordStrength({
      score,
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialChar,
      minLength,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
    setPasswordError('');
  };

  const getStrengthLabel = () => {
    if (passwordStrength.score === 0) return '';
    if (passwordStrength.score <= 2) return 'Fraca';
    if (passwordStrength.score <= 4) return 'Média';
    return 'Forte';
  };

  const getStrengthColor = () => {
    if (passwordStrength.score <= 2) return 'bg-red-500';
    if (passwordStrength.score <= 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (passwordStrength.score < 5) {
      setPasswordError('A senha deve atender a todos os requisitos de segurança');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem');
      return;
    }

    setPasswordError('');
    onSignUp?.(event);
  };

  return (
    <div className="h-[100dvh] flex flex-col md:flex-row font-geist w-[100dvw]">
      {/* Left column: sign-up form */}
      <section className="flex-1 flex items-center justify-center p-8 overflow-y-auto hide-scrollbar relative">
        {/* Back to Home button */}
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Voltar para Home</span>
          </button>
        )}
        
        <div className="w-full max-w-md py-8">
          <div className="flex flex-col gap-6">
            <h1 className="animate-element animate-delay-100 text-4xl md:text-5xl font-semibold leading-tight">{title}</h1>
            <p className="animate-element animate-delay-200 text-muted-foreground">{description}</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="animate-element animate-delay-300">
                <label className="text-sm font-medium text-muted-foreground">Nome Completo</label>
                <GlassInputWrapper>
                  <input 
                    name="fullName" 
                    type="text" 
                    placeholder="Digite seu nome completo" 
                    className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none"
                    required
                  />
                </GlassInputWrapper>
              </div>

              <div className="animate-element animate-delay-400">
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <GlassInputWrapper>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="Digite seu email" 
                    className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none"
                    required
                  />
                </GlassInputWrapper>
              </div>

              <div className="animate-element animate-delay-500">
                <label className="text-sm font-medium text-muted-foreground">Senha</label>
                <GlassInputWrapper>
                  <div className="relative">
                    <input 
                      name="password" 
                      type={showPassword ? 'text' : 'password'} 
                      placeholder="Crie uma senha forte" 
                      className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none"
                      required
                      minLength={6}
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-3 flex items-center">
                      {showPassword ? <EyeOff className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" /> : <Eye className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />}
                    </button>
                  </div>
                </GlassInputWrapper>
                
                {/* Password strength indicator */}
                {password.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {/* Strength bar */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-300 ${getStrengthColor()}`}
                          style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                        />
                      </div>
                      {passwordStrength.score > 0 && (
                        <span className={`text-xs font-medium ${
                          passwordStrength.score <= 2 ? 'text-red-500' : 
                          passwordStrength.score <= 4 ? 'text-yellow-500' : 
                          'text-green-500'
                        }`}>
                          {getStrengthLabel()}
                        </span>
                      )}
                    </div>
                    
                    {/* Requirements checklist */}
                    <div className="space-y-1 text-xs">
                      <div className={`flex items-center gap-1.5 ${passwordStrength.minLength ? 'text-green-500' : 'text-muted-foreground'}`}>
                        <span className={`w-1 h-1 rounded-full ${passwordStrength.minLength ? 'bg-green-500' : 'bg-muted-foreground'}`} />
                        Mínimo de 8 caracteres
                      </div>
                      <div className={`flex items-center gap-1.5 ${passwordStrength.hasUpperCase ? 'text-green-500' : 'text-muted-foreground'}`}>
                        <span className={`w-1 h-1 rounded-full ${passwordStrength.hasUpperCase ? 'bg-green-500' : 'bg-muted-foreground'}`} />
                        Pelo menos uma letra maiúscula
                      </div>
                      <div className={`flex items-center gap-1.5 ${passwordStrength.hasLowerCase ? 'text-green-500' : 'text-muted-foreground'}`}>
                        <span className={`w-1 h-1 rounded-full ${passwordStrength.hasLowerCase ? 'bg-green-500' : 'bg-muted-foreground'}`} />
                        Pelo menos uma letra minúscula
                      </div>
                      <div className={`flex items-center gap-1.5 ${passwordStrength.hasNumber ? 'text-green-500' : 'text-muted-foreground'}`}>
                        <span className={`w-1 h-1 rounded-full ${passwordStrength.hasNumber ? 'bg-green-500' : 'bg-muted-foreground'}`} />
                        Pelo menos um número
                      </div>
                      <div className={`flex items-center gap-1.5 ${passwordStrength.hasSpecialChar ? 'text-green-500' : 'text-muted-foreground'}`}>
                        <span className={`w-1 h-1 rounded-full ${passwordStrength.hasSpecialChar ? 'bg-green-500' : 'bg-muted-foreground'}`} />
                        Pelo menos um caractere especial (!, ?, #, *, @)
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="animate-element animate-delay-600">
                <label className="text-sm font-medium text-muted-foreground">Confirmar Senha</label>
                <GlassInputWrapper>
                  <div className="relative">
                    <input 
                      name="confirmPassword" 
                      type={showConfirmPassword ? 'text' : 'password'} 
                      placeholder="Digite a senha novamente" 
                      className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none"
                      required
                      minLength={6}
                    />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-3 flex items-center">
                      {showConfirmPassword ? <EyeOff className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" /> : <Eye className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />}
                    </button>
                  </div>
                </GlassInputWrapper>
                {passwordError && (
                  <p className="mt-2 text-sm text-destructive">{passwordError}</p>
                )}
              </div>

              <div className="animate-element animate-delay-700 flex items-start gap-3 text-sm">
                <input type="checkbox" name="terms" className="custom-checkbox mt-0.5" required />
                <span className="text-foreground/90">
                  Concordo com os <a href="#" className="text-violet-400 hover:underline">Termos de Uso</a> e <a href="#" className="text-violet-400 hover:underline">Política de Privacidade</a>
                </span>
              </div>

              <button type="submit" className="animate-element animate-delay-800 w-full rounded-2xl bg-primary py-4 font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Criar Conta
              </button>
            </form>

            <div className="animate-element animate-delay-900 relative flex items-center justify-center">
              <span className="w-full border-t border-border"></span>
              <span className="px-4 text-sm text-muted-foreground bg-background absolute">Ou continue com</span>
            </div>

            <button onClick={onGoogleSignUp} className="animate-element animate-delay-1000 w-full flex items-center justify-center gap-3 border border-border rounded-2xl py-4 hover:bg-secondary transition-colors">
                <GoogleIcon />
                Continue com Google
            </button>

            <p className="animate-element animate-delay-1100 text-center text-sm text-muted-foreground">
              Já tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); onSignInRedirect?.(); }} className="text-violet-400 hover:underline transition-colors">Fazer Login</a>
            </p>
          </div>
        </div>
      </section>

      {/* Right column: hero image + testimonials */}
      {heroImageSrc && (
        <section className="hidden md:block flex-1 relative p-4">
          <div className="animate-slide-right animate-delay-300 absolute inset-4 rounded-3xl bg-cover bg-center" style={{ backgroundImage: `url(${heroImageSrc})` }}></div>
          {testimonials.length > 0 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 px-8 w-full justify-center">
              <TestimonialCard testimonial={testimonials[0]} delay="animate-delay-1200" />
              {testimonials[1] && <div className="hidden xl:flex"><TestimonialCard testimonial={testimonials[1]} delay="animate-delay-1400" /></div>}
              {testimonials[2] && <div className="hidden 2xl:flex"><TestimonialCard testimonial={testimonials[2]} delay="animate-delay-1600" /></div>}
            </div>
          )}
        </section>
      )}
    </div>
  );
};
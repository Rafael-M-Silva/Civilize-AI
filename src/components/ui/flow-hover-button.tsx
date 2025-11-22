import { cn } from '@/lib/utils';
import { usePopSound } from '@/hooks/use-pop-sound.ts';

export const FlowHoverButton: React.FC<{
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}> = ({ icon, children, className, ...props }) => {
  const { playPopSound } = usePopSound();

  return (
    <button
      className={cn(
        `relative cursor-pointer z-0 flex items-center justify-center gap-2 overflow-hidden rounded-md 
        border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 
        px-4 py-2 font-semibold text-zinc-800 dark:text-zinc-200 transition-all duration-500
        before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-[#3283FF] before:transition-transform before:duration-1000 before:content-[""]
        hover:scale-105 hover:text-zinc-100 hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`,
        className
      )}
      onMouseEnter={playPopSound}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};
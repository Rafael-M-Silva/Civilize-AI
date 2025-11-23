import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Check, Coins } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface DailyRewardCalendarProps {
  loginDates: string[]; // Array de datas em formato ISO (YYYY-MM-DD)
  onDailyReward: () => void;
}

export function DailyRewardCalendar({ loginDates, onDailyReward }: DailyRewardCalendarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [todayRewardClaimed, setTodayRewardClaimed] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    // Verificar se já ganhou a recompensa de hoje
    const claimed = loginDates.includes(today);
    setTodayRewardClaimed(claimed);
  }, [loginDates, today]);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const isDateLoggedIn = (year: number, month: number, day: number) => {
    const dateStr = formatDate(year, month, day);
    return loginDates.includes(dateStr);
  };

  const isToday = (year: number, month: number, day: number) => {
    const dateStr = formatDate(year, month, day);
    return dateStr === today;
  };

  const handleClaimDailyReward = () => {
    if (!todayRewardClaimed) {
      onDailyReward();
      setTodayRewardClaimed(true);
    }
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const previousMonth = () => {
    setCurrentMonth(new Date(year, month - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1));
  };

  // Calcular sequência de login
  const calculateStreak = () => {
    if (loginDates.length === 0) return 0;
    
    const sortedDates = [...loginDates].sort().reverse();
    let streak = 0;
    let checkDate = new Date();
    
    for (let i = 0; i < sortedDates.length; i++) {
      const loginDate = sortedDates[i];
      const expectedDate = new Date(checkDate);
      expectedDate.setDate(expectedDate.getDate() - i);
      const expectedDateStr = expectedDate.toISOString().split('T')[0];
      
      if (loginDate === expectedDateStr) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };

  const streak = calculateStreak();

  return (
    <div className="relative">
      {/* Botão do Calendário */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Calendar className="h-5 w-5" />
        {!todayRewardClaimed && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        )}
      </Button>

      {/* Dropdown do Calendário */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Card do Calendário */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 z-50"
            >
              <Card className="w-[350px] p-4 shadow-xl">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-1">Recompensa Diária</h3>
                  <p className="text-sm text-muted-foreground">
                    Entre todos os dias para ganhar 20 LizeCoins!
                  </p>
                </div>

                {/* Streak Counter */}
                <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-[#3283FF]/10 to-[#E3C545]/10 border border-[#3283FF]/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF2A1D] to-[#E3C545] flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🔥</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Sequência atual</p>
                        <p className="text-xs text-muted-foreground">Dias consecutivos</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-[#3283FF]">{streak}</div>
                  </div>
                </div>

                {/* Botão de Recompensa */}
                {!todayRewardClaimed && (
                  <motion.div
                    className="mb-4"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                  >
                    <Button
                      onClick={handleClaimDailyReward}
                      className="w-full bg-gradient-to-r from-[#E3C545] to-[#E3C545]/80 hover:from-[#E3C545]/90 hover:to-[#E3C545]/70 text-black font-semibold"
                    >
                      <Coins className="w-4 h-4 mr-2" />
                      Resgatar 20 LizeCoins Hoje!
                    </Button>
                  </motion.div>
                )}

                {todayRewardClaimed && (
                  <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="w-5 h-5" />
                      <span className="text-sm font-medium">Recompensa coletada hoje!</span>
                    </div>
                  </div>
                )}

                {/* Navegação do Mês */}
                <div className="flex items-center justify-between mb-3">
                  <Button variant="ghost" size="sm" onClick={previousMonth}>
                    ←
                  </Button>
                  <span className="font-semibold">
                    {monthNames[month]} {year}
                  </span>
                  <Button variant="ghost" size="sm" onClick={nextMonth}>
                    →
                  </Button>
                </div>

                {/* Calendário */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {weekDays.map(day => (
                    <div
                      key={day}
                      className="text-center text-xs font-medium text-muted-foreground p-1"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {/* Dias vazios antes do início do mês */}
                  {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                    <div key={`empty-${index}`} className="aspect-square" />
                  ))}

                  {/* Dias do mês */}
                  {Array.from({ length: daysInMonth }).map((_, index) => {
                    const day = index + 1;
                    const loggedIn = isDateLoggedIn(year, month, day);
                    const isTodayDate = isToday(year, month, day);

                    return (
                      <motion.div
                        key={day}
                        className={`
                          aspect-square flex items-center justify-center rounded-lg text-sm
                          ${isTodayDate ? 'ring-2 ring-[#3283FF] ring-offset-2' : ''}
                          ${loggedIn ? 'bg-gradient-to-br from-[#E3C545] to-[#E3C545]/60 text-black font-bold' : 'text-muted-foreground'}
                        `}
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.005 }}
                      >
                        {loggedIn && (
                          <div className="relative">
                            <span>{day}</span>
                            <motion.div
                              className="absolute -top-1 -right-1"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <Check className="w-3 h-3 text-green-600" />
                            </motion.div>
                          </div>
                        )}
                        {!loggedIn && day}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Total de dias logados</span>
                    <span className="font-semibold text-foreground">{loginDates.length}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
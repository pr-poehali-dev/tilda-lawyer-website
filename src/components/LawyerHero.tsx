import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function LawyerHero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-lawyer-dark via-lawyer-dark to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-lawyer-gold/10" />
      </div>

      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-lawyer-gold">
                <Icon name="Scale" size={24} />
                <span className="font-semibold tracking-wide uppercase text-sm">
                  Профессиональная защита
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold font-heading leading-tight">
                Ваш надежный
                <span className="text-lawyer-gold block">адвокат</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Специализируюсь на уголовной защите и административных делах.
                Защищаю ваши права на всех этапах процесса.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-lawyer-gold hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Срочная консультация
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-lawyer-dark font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>24/7 доступность</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>Конфиденциальность</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    Бесплатная консультация
                  </h3>
                  <p className="text-gray-300">
                    Обсудим ваше дело и найдем решение
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-lawyer-gold/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-lawyer-gold">
                      15+
                    </div>
                    <div className="text-sm text-gray-300">лет опыта</div>
                  </div>
                  <div className="bg-lawyer-gold/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-lawyer-gold">
                      500+
                    </div>
                    <div className="text-sm text-gray-300">дел выиграно</div>
                  </div>
                </div>

                <Button className="w-full bg-lawyer-gold hover:bg-orange-600 text-white font-semibold py-3 rounded-lg">
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

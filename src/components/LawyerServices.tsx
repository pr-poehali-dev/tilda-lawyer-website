import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Shield",
    title: "Уголовная защита",
    description: "Представительство в уголовных делах на всех стадиях процесса",
    features: [
      "Защита при допросах",
      "Обжалование приговоров",
      "Работа с следствием",
      "Защита в суде",
    ],
  },
  {
    icon: "FileText",
    title: "Административные дела",
    description: "Защита прав в административных правонарушениях",
    features: [
      "Штрафы ГИБДД",
      "Административные комиссии",
      "Обжалование постановлений",
      "Защита прав граждан",
    ],
  },
];

export default function LawyerServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-lawyer-dark mb-4 font-heading">
            Мои услуги
          </h2>
          <p className="text-xl text-lawyer-gray max-w-2xl mx-auto">
            Профессиональная юридическая помощь в области уголовного и
            административного права
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-lawyer-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lawyer-gold/20 transition-colors duration-300">
                    <Icon
                      name={service.icon as any}
                      size={32}
                      className="text-lawyer-gold"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-lawyer-dark font-heading">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-lawyer-gray text-center leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-lawyer-gold flex-shrink-0"
                        />
                        <span className="text-lawyer-gray">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button className="w-full bg-lawyer-dark hover:bg-gray-800 text-white font-semibold py-3 rounded-lg">
                      Получить консультацию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-lawyer-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Clock" size={24} className="text-lawyer-gold" />
                </div>
                <h3 className="font-bold text-lawyer-dark mb-2">
                  Быстрый отклик
                </h3>
                <p className="text-lawyer-gray text-sm">
                  Отвечаю в течение 15 минут
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-lawyer-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Award" size={24} className="text-lawyer-gold" />
                </div>
                <h3 className="font-bold text-lawyer-dark mb-2">Опыт</h3>
                <p className="text-lawyer-gray text-sm">
                  15+ лет в юридической практике
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-lawyer-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Shield" size={24} className="text-lawyer-gold" />
                </div>
                <h3 className="font-bold text-lawyer-dark mb-2">
                  Конфиденциальность
                </h3>
                <p className="text-lawyer-gray text-sm">
                  Полная защита ваших данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

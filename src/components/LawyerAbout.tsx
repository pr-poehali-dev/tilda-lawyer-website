import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function LawyerAbout() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-lawyer-dark mb-6 font-heading">
                Обо мне
              </h2>
              <p className="text-lg text-lawyer-gray leading-relaxed mb-6">
                Я — опытный адвокат с 15-летним стажем в области уголовного
                права и административных дел. Моя цель — защитить ваши права и
                добиться справедливости в любой ситуации.
              </p>
              <p className="text-lg text-lawyer-gray leading-relaxed">
                За годы практики я выработал индивидуальный подход к каждому
                клиенту, основанный на глубоком понимании закона и человеческой
                психологии.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-lawyer-light rounded-lg">
                <div className="text-3xl font-bold text-lawyer-gold mb-2">
                  500+
                </div>
                <div className="text-lawyer-gray">Выигранных дел</div>
              </div>
              <div className="text-center p-6 bg-lawyer-light rounded-lg">
                <div className="text-3xl font-bold text-lawyer-gold mb-2">
                  15+
                </div>
                <div className="text-lawyer-gray">Лет опыта</div>
              </div>
            </div>

            <Button className="bg-lawyer-gold hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать резюме
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-lawyer-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name="GraduationCap"
                        size={40}
                        className="text-lawyer-gold"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-lawyer-dark mb-2">
                      Образование
                    </h3>
                    <p className="text-lawyer-gray">
                      МГУ им. М.В. Ломоносова, Юридический факультет
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Icon
                        name="Award"
                        size={20}
                        className="text-lawyer-gold mt-1 flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-semibold text-lawyer-dark">
                          Специализация
                        </h4>
                        <p className="text-lawyer-gray text-sm">
                          Уголовное право, административные правонарушения
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Icon
                        name="Users"
                        size={20}
                        className="text-lawyer-gold mt-1 flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-semibold text-lawyer-dark">
                          Членство
                        </h4>
                        <p className="text-lawyer-gray text-sm">
                          Адвокатская палата города Москвы
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Icon
                        name="Star"
                        size={20}
                        className="text-lawyer-gold mt-1 flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-semibold text-lawyer-dark">
                          Достижения
                        </h4>
                        <p className="text-lawyer-gray text-sm">
                          Лауреат премии "Адвокат года" 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

export const OnemliBilgiler = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="group-collapse-expand">
        <button
          className={isOpen ? "btn btn-collapse collapsed" : "btn btn-collapse"}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseDuration"
          aria-expanded="false"
          aria-controls="collapseDuration"
          onClick={() => handleOpen()}
        >
          <h6>Önemli Bilgiler</h6>
          <svg
            width={12}
            height={7}
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </button>
        <div
          className={isOpen ? "collapse" : "collapse show"}
          id="collapseDuration"
        >
          <div className="card card-body">
            <br />
            *Rezervasyon esnasında kesinlikle koltuk numarası sözü ve garantisi
            verilemez.
            <br />
            *Rehber gerekli gördüğü takdirde, tüm programı gerçekleştirmek kaydı
            ile zamanlama ve program akışı konusunda değişiklik yapma hakkına
            sahiptir.
            <br />
            *Programda belirtilen oteller standartları ve mevkileri bakımından
            aynı olmak kaydı ile değiştirilebilir.
            <br />
            *Turumuzda rehberlik, ulaşım, konaklama ve çevre gezileri paket
            programdır ayrı düşünülemez.
            <br />
            *Çocuk indirimi iki yetişkin yanında uygulanır tek bir çocuk için
            kullanılır.
            <br />
            *En son sirkü bir öncekini geçersiz kılar.
            <br />
            *Program zamanlamasında hava, yol vb. nedenlerle rehber gerekli
            gördüğü taktirde değişiklik yapabilir. Turlarımızda kullanılan araç
            tipleri kişi sayılarına göre aşağıdaki şekilde sınıflandırılır.
            <br />
            *Her turumuzda bulunan kişi sayısına göre aşağıda bulunan araç
            tipleri tayin edilir.
            <br />
            *Otobüsler: 28-46 kişi sayılarında kullanılır.
            <br />
            *Mercedes Travego-Tourismo 46+1+1 koltuklandırma, abs, asr, klima, 2
            adet monitör, 2 adet buzdolabı, su ısıtıcılı mutfak ünitesi, okuma
            lambaları, rehber anonsu için ses sistemi, cd ve dvd oynatıcı (cep
            telefonu kullanılabilir)
            <br />
            *Neoplan Cityliner-Tourliner 46+1+1 koltuklandırma, abs, asr, klima,
            2 adet monitör, 2 adet buzdolabı, su ısıtıcılı mutfak ünitesi, okuma
            lambaları, rehber anonsu için ses sistemi, cd ve dvd oynatıcı (cep
            telefonu kullanılabilir)
            <br />
            *Mitsubishi Safir 54+1+1 koltuklandırma, abs, asr, klima, 2 adet
            monitör, 2 adet buzdolabı, su ısıtıcılı mutfak ünitesi, okuma
            lambaları, rehber anonsu için ses sistemi, cd ve dvd oynatıcı (cep
            telefonu kullanılabilir)
            <br />
            *Midibüsler: 17-27 kişi sayılarında kullanılır. Isuzu Turkuaz 31+1
            koltuklandırma, yatar otobüs koltuklu, abs, asr, klima, 1 adet
            monitör, 1 adet buzdolabı, su ısıtıcılı mutfak ünitesi, okuma
            lambaları, rehber anonsu için ses sistemi, cd ve dvd oynatıcı.
            <br />
            *Minibüsler: 16’ya kadar kişi sayılarında kullanılır. Vw Volt 12+1
            koltuklandırma, özel tasarlanmış yatar otobüs deri koltuklu, abs,
            asr, klima, 1 adet buzdolabı, okuma lambaları, rehber anonsu için
            ses sistemi, cd ve dvd oynatıcı. Vw Volt El 16+1 koltuklandırma,
            özel tasarlanmış yatar otobüs deri koltuklu, abs, asr, klima, 1 adet
            buzdolabı, okuma lambaları, rehber anonsu için ses sistemi, cd ve
            dvd oynatıcı.
            <br />
            *Mercedes Sprinter 12+1 koltuklandırma, özel tasarlanmış yatar
            otobüs deri koltuklu, abs, asr, klima, 1 adet buzdolabı, okuma
            lambaları, rehber anonsu için ses sistemi, cd ve dvd oynatıcı.
            <br />
            *Mercedes Sprinter El 16+1 koltuklandırma, özel tasarlanmış yatar
            otobüs deri koltuklu, abs, asr, klima, 1 adet buzdolabı, okuma
            lambaları, rehber anonsu için ses sistemi, cd ve dvd oynatıcı.
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

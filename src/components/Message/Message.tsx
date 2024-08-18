import './Message.scss';
import imgDscr1 from '../../../public/images/Description/Layer 3 copy 2.png';
import imgDscr2 from '../../../public/images/Description/Layer 3 copy 3.png';
import imgDscr3 from '../../../public/images/Description/Layer 3 copy 4.png';
import imgDscr4 from '../../../public/images/Description/Layer 3 copy 5.png';
import imgDscr5 from '../../../public/images/Description/Layer 3 copy 6.png';
import React, { useEffect, useState } from 'react';
import { useAppContext } from "../../AppContext";


export const Message = React.memo(() => {
  const {index} = useAppContext();
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    if (index === 1) {
      setAnimation(true);
    } else {
      setAnimation(false);
    }
  }, [index]);

  return (
    <section className={`description ${animation ? 'animate' : ''}`}>
      <div className="description__background" />
      <h2 className="description__title">
        Текст
        <br />
        сообщения
      </h2>
      <div className="description__wrapper">
        <p className="description__text">
          <span>Lorem ipsum dolor sit amet</span> consectetur adipisicing elit. Nisi provident
          temporibus itaque ipsum placeat magni est voluptatum voluptatem fugit? Eum porro
          repudiandae impedit quia rem ex, distinctio magni nostrum vitae corrupti accusantium
          veniam culpa fugiat provident omnis excepturi beatae totam debitis assumenda odit minus
          delectus accusamus ducimus aliquid! Nihil illum adipisci iure. earum esse quibusdam,
          molestias atque? Iusto eaque, quo ratione consequatur minus tenetur eligendi perspiciatis
          libero nesciunt aperiam expedita a consequuntur quis dolores esse fugit placeat nihil
          ipsum et earum sapiente reprehenderit quam provident. Repudiandae magni quae officia nobis
          maiores culpa impedit. Quas provident deserunt vero, a pariatur eos veniam nihil aliquid
          ullam quis facilis, perspiciatis minus possimus doloribus reprehenderit aspernatur quo
          quia ad nemo ex. Libero neque voluptates doloremque, ex possimus voluptatibus ratione
          ipsum beatae molestiae. Pariatur, reiciendis? Sint sapiente repellat blanditiis expedita,
          pariatur ipsa corrupti minus! Hic, obcae distinctio magni nostrum vitae corrupti
          accusantium veniam culpa fugiat provident omnis excepturi beatae totam debitis assumenda
          odit minus delectus accusamus ducimus aliquid! Nihil illum adipisci iure. earum esse
          quibusdam, molestias atque? Iusto eaque, quo ratione consequatur minus tenetur eligendi
          perspiciatis libero nesciunt aperiam expedita a consequuntur quis dolores esse fugit
          placeat nihil ipsum et earum sapiente reprehenderit quam provident. Repudiandae magni quae
          officia nobis maiores culpa impedit. Quas provident deserunt vero, a pariatur eos veniam
          nihil aliquid ullam quis facilis, perspiciatis minus possimus doloribus reprehenderit
          aspernatur quo quia ad nemo ex. Libero neque voluptates doloremque, ex possimus
          voluptatibus ratione ipsum beatae molestiae. Pariatur, reiciendis? Sint sapiente repellat
          blanditiis expedita, pariatur ipsa corrupti minus! Hic, obcae distinctio magni nostrum
          vitae corrupti accusantium veniam culpa fugiat provident omnis excepturi beatae totam
          debitis assumenda odit minus delectus accusamus ducimus aliquid! Nihil illum adipisci
          iure. earum esse quibusdam, molestias atque? Iusto eaque, quo ratione consequatur minus
          tenetur eligendi perspiciatis libero nesciunt aperiam expedita a consequuntur quis dolores
          esse fugit placeat nihil ipsum et earum sapiente reprehenderit quam provident. Repudiandae
          magni quae officia nobis maiores culpa impedit. Quas provident deserunt vero, a pariatur
          eos veniam nihil aliquid ullam quis facilis, perspiciatis minus possimus doloribus
          reprehenderit aspernatur quo quia ad nemo ex. Libero neque voluptates doloremque, ex
          possimus voluptatibus ratione ipsum beatae molestiae. Pariatur, reiciendis? Sint sapiente
          repellat blanditiis expedita, pariatur ipsa corrupti minus! Hic, obcaecati, optio labore
          ipsam saepe odio cumque nihil, fugiat porro praesentium soluta eos doloribus suscipit
          distinctio ipsa culpa. Eos repellendus similique cum aliquid et, dolorum dolores sit
          laboriosam itaque earum tempore officia dolorem delectus ipsum, atque iure ratione
          accusamus laudantium quidem at distinctio dicta libero sed! Reprehenderit dicta, at
          maiores rerum eos qui temporibus accusantium quas omnis illum, iure, tenetur recusandae.
          Magni reiciendis possimus obcaecati quam eligendi. Non.
        </p>
      </div>
      <div className="description__images">
        <img
          src={imgDscr1}
          alt="Decorative Image 1"
          className={`decorative-image-desc imageDscr1 ${animation ? 'start-animation' : 'stop-animation'}`}
        />
        <img
          src={imgDscr2}
          alt="Decorative Image 2"
          className={`decorative-image-desc imageDscr2 ${animation ? 'start-animation' : 'stop-animation'}`}
        />
        <img
          src={imgDscr3}
          alt="Decorative Image 3"
          className={`decorative-image-desc imageDscr3 ${animation ? 'start-animation' : 'stop-animation'}`}
        />
        <img
          src={imgDscr4}
          alt="Decorative Image 4"
          className={`decorative-image-desc imageDscr4 ${animation ? 'start-animation' : 'stop-animation'}`}
        />
        <img
          src={imgDscr5}
          alt="Decorative Image 5"
          className={`decorative-image-desc imageDscr5 ${animation ? 'start-animation' : 'stop-animation'}`}
        />
      </div>
    </section>
  );
});

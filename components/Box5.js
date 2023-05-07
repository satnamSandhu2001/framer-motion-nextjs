import React from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';

function Box5() {
  const control = useAnimation();
  return (
    <div>
      <div className="my-8">
        <button
          onClick={() => {
            control.start({
              x: 500,
              translateX: '100%',
              transition: { duration: 1 },
            });
          }}
          className="bg-blue-500 mx-4 px-6 py-2 font-bold rounded hover:brightness-125"
        >
          Move right
        </button>
        <button
          onClick={() => {
            control.start({
              x: 0,
              transition: { duration: 1 },
            });
          }}
          className="bg-blue-500 mx-4 px-6 py-2 font-bold rounded hover:brightness-125"
        >
          Move left
        </button>
        <button
          onClick={() => {
            control.start({
              rotate: 180,
              transition: { duration: 1 },
            });
          }}
          className="bg-blue-500 mx-4 px-6 py-2 font-bold rounded hover:brightness-125"
        >
          rotate
        </button>
        <button
          onClick={() => {
            control.start({
              borderRadius: 100,
              transition: { duration: 1 },
            });
          }}
          className="bg-blue-500 mx-4 px-6 py-2 font-bold rounded hover:brightness-125"
        >
          circle
        </button>
        <button
          onClick={() => {
            control.start({
              borderRadius: 0,
              transition: { duration: 1 },
            });
          }}
          className="bg-blue-500 mx-4 px-6 py-2 font-bold rounded hover:brightness-125"
        >
          square
        </button>
        <button
          onClick={() => {
            control.stop();
          }}
          className="bg-blue-500 mx-4 px-6 py-2 font-bold rounded hover:brightness-125"
        >
          stop
        </button>
      </div>
      <motion.div
        className="w-56 min-h-[6rem] bg-blue-400 inline-block border-t-4 border-white"
        animate={control}
      ></motion.div>

      <motion.p className="text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
        itaque sint mollitia quia in expedita error! Itaque a asperiores maiores
        accusantium aliquid necessitatibus, incidunt id deserunt quas tempore
        architecto. Totam. Vel voluptas expedita praesentium dolore, facilis
        obcaecati, maxime enim culpa veniam facere accusamus quisquam aspernatur
        minima pariatur eum quidem, dolor velit quam perferendis quae blanditiis
        libero? Consectetur molestias voluptatem delectus? Inventore, iste,
        commodi hic asperiores id unde facere sunt quibusdam et molestias, nisi
        suscipit ipsa error nulla. Ipsam minus, deleniti totam atque et numquam
        sed distinctio? Dolorum aut tempora doloremque. Ut, illum. Eius
        perspiciatis, non aperiam doloribus aut voluptates quos ipsa! Doloremque
        facilis accusamus corrupti rem minus, illum repudiandae eum blanditiis
        corporis soluta provident quidem asperiores fuga nostrum tenetur
        quaerat? Beatae quisquam ratione, enim alias provident voluptate
        similique blanditiis officia ipsa expedita labore nostrum et illo veniam
        minus eum, doloribus, minima itaque velit corrupti perferendis
        architecto illum. Ipsam, sit mollitia. Laboriosam nam tempora magni
        suscipit vitae minus in rerum error delectus minima placeat nobis
        molestias quas accusantium obcaecati officia sequi quis voluptatem
        provident, deserunt labore architecto! Animi fugit qui ea? Unde sunt
        numquam sit, assumenda reprehenderit earum provident quibusdam ipsa
        sequi nulla vitae enim, ducimus exercitationem, cumque qui voluptate
        modi asperiores omnis a repellat dolorem non. Voluptatibus iste aut
        aperiam? Dolore commodi nobis ipsum perferendis facere culpa aliquam
        repellat fuga repudiandae? Iusto ea maxime corrupti doloribus ipsum,
        consequatur blanditiis assumenda alias nulla unde distinctio quos
        suscipit perspiciatis excepturi natus aspernatur. Accusamus omnis quidem
        optio qui numquam in odit commodi vero nisi nihil harum repellat, hic
        eaque earum ea. Libero natus tempora ipsa quaerat, corporis veritatis
        laboriosam ipsum praesentium autem deleniti. Iusto natus non esse
        provident dicta commodi nam placeat architecto explicabo. Sunt rerum
        culpa iusto quo. Sapiente sed totam magni vitae ratione autem quasi!
        Maiores amet facilis debitis eos quaerat. Culpa, esse aperiam. Molestiae
        ex ut fuga! Illo repellat consequatur maiores beatae fugit ut, eius
        voluptatem nisi similique reprehenderit dignissimos, saepe explicabo
        rerum necessitatibus est omnis commodi alias soluta corporis. Quos
        aperiam adipisci doloremque exercitationem earum incidunt. Tempore iste
        tenetur pariatur neque magnam rem odit, alias error necessitatibus
        ratione aperiam? Inventore aut nam quo itaque optio odio corrupti modi
        excepturi? Impedit dolore distinctio asperiores officiis reiciendis
        debitis quam nulla, esse nesciunt, voluptatem temporibus nostrum vel.
        Cum, eaque cupiditate? Repellendus, modi cupiditate quas sequi at
        repellat tempora! Voluptatibus recusandae maxime nisi? Laborum
        dignissimos ullam corporis libero odit? Tempora placeat, eveniet
        veritatis tenetur doloremque ea consequuntur esse necessitatibus, ut
        quod accusamus alias architecto autem magni laudantium fugiat error
        minus adipisci hic ducimus? Pariatur ipsa delectus fuga! Ea quis eaque
        optio pariatur perferendis harum laboriosam illo eum, totam soluta rem
        sapiente non nam quod quos necessitatibus laborum, deleniti numquam quam
        adipisci. Odit, magni! Iste in esse, cupiditate voluptatum obcaecati
        optio eos aspernatur totam ducimus ullam! Accusamus sed deleniti ducimus
        a ad dolore laudantium voluptate sunt culpa commodi! Assumenda earum
        beatae praesentium officiis ex! Explicabo cumque in reiciendis saepe
        commodi obcaecati recusandae totam, mollitia ad vitae qui, temporibus
        consequatur molestias natus unde illo veritatis eligendi neque ex odio,
        perspiciatis itaque dolore! Unde, atque ipsa. Iste enim debitis quam
        corporis, molestiae deleniti esse fugit laboriosam animi! Veritatis
        illum itaque, illo aliquid et, molestiae eius error porro, tempore
        maxime doloribus excepturi. Iste ipsum perspiciatis voluptas ducimus!
        Harum doloremque quis illum non et maiores, vel explicabo, aut,
        voluptatem adipisci unde reprehenderit in. Aut, rerum asperiores
        deleniti saepe vitae facere laborum nesciunt, fuga eaque perspiciatis
        quod blanditiis corporis. Ipsum labore cupiditate, at reiciendis aliquid
        voluptas quaerat pariatur praesentium maxime sit! Praesentium itaque
        veniam non provident mollitia corporis eos odio architecto, blanditiis
        quasi libero vel voluptates neque quae iusto? Voluptas asperiores autem
        iusto eveniet vero odit, quisquam architecto commodi fuga assumenda
        voluptatem reprehenderit et voluptatum minima nobis dolore voluptates
        accusamus earum maiores quaerat aliquid? Reiciendis a mollitia corrupti
        earum. Atque exercitationem assumenda quaerat quo repellat eum illo
        voluptatem? Accusantium maxime facere enim dicta? Unde rerum mollitia
        placeat qui praesentium deserunt, soluta cupiditate, sunt assumenda,
        suscipit dolorum temporibus nostrum aut. Laudantium ab quod, officia
        nesciunt fugit dignissimos in cum amet officiis rem dicta adipisci
        tempore architecto repellat aperiam laborum fuga ut accusamus veniam
        esse error. Id a omnis earum repudiandae. Autem, aut. Possimus qui id
        reprehenderit mollitia quaerat officiis pariatur nam aliquam facilis
        harum repellendus, ipsa odio cum perspiciatis modi non? Assumenda
        deserunt magni harum! Eaque et molestiae illo suscipit. Consectetur,
        perspiciatis sed numquam doloribus ipsam ut ducimus distinctio
        dignissimos eligendi iste ipsa hic voluptate. Aspernatur minima deserunt
        consequatur. Dolor, animi eveniet. Ratione facere alias laboriosam.
        Dolores possimus tempore fuga? Nisi tempore mollitia laborum numquam
        vero quis aliquid, repudiandae repellendus eligendi dolores corporis
        nulla, dolorem possimus eum, quasi tenetur impedit! A quidem dolore ipsa
        inventore blanditiis fugiat harum omnis eveniet. Consequuntur illum quia
        porro incidunt commodi itaque ipsam quidem, repellendus autem quam
        dolores esse accusantium? Delectus fugiat iste eligendi debitis
        inventore, voluptate rem laboriosam quis beatae quas necessitatibus
        illum dolorum. Facilis doloremque et tenetur ab iusto quis, sunt eum
        enim minima sapiente provident! Minima vero, unde sit molestias
        necessitatibus voluptatem aut exercitationem in cum eos nisi ullam sunt
        placeat error! Magni necessitatibus consectetur voluptatum suscipit at
        provident harum facere rem dicta a iste voluptate molestiae, unde eum
        quas quia eos non quam doloribus impedit, deserunt cupiditate enim
        repellendus. Vel, aliquam! Enim porro totam veniam corrupti ad officia,
        deleniti dolorum, quam nihil, aspernatur non consequatur fuga eaque in.
        Repudiandae, obcaecati eos. Ex eligendi ratione consectetur cumque, odio
        vero sapiente ut commodi? Quam tempore molestiae doloremque. Inventore
        numquam, tempora, omnis amet tempore dolorem aliquam ea officia
        accusamus error, alias deleniti reiciendis sunt. Aperiam, vel?
        Voluptatibus ipsam ab eius, dolorum placeat excepturi nobis! Quibusdam
        dolorem fuga voluptas aliquid, mollitia at aspernatur cumque ratione,
        quisquam voluptatem possimus officia asperiores praesentium veniam
        voluptates officiis reiciendis doloribus reprehenderit. Molestiae
        explicabo nesciunt corporis mollitia tempore nostrum repudiandae. Ipsum
        id vero, eveniet eius magni iusto in? Necessitatibus consequatur facilis
        dolore perspiciatis labore aliquam. Doloremque officia animi nulla
        quibusdam repellendus. Aut neque quam modi. Omnis delectus tempore
        recusandae voluptatibus. Velit dolorem soluta eius dolores consectetur
        eum laudantium necessitatibus ut recusandae reprehenderit ipsum, dolor
        et expedita aliquam doloribus ipsa ratione vel asperiores explicabo,
        maxime amet quas repellendus. Labore, hic dignissimos. Saepe quis
        explicabo labore cum asperiores ab similique obcaecati, veritatis
        voluptates aut eum, iste ipsum ducimus! Nesciunt et itaque maxime,
        consequatur unde cupiditate aspernatur, quis quibusdam, perferendis
        magnam voluptas odit. Adipisci exercitationem praesentium debitis non
        eius aperiam delectus ad? Tempore ullam mollitia consequatur, at in
        asperiores, non facere cumque minima repudiandae incidunt, dolor ab
        error optio exercitationem rerum corporis! Pariatur! Ipsum ducimus harum
        atque doloremque minus, cum laborum at nesciunt repellat iusto sequi
        recusandae fugit deserunt libero sint sed. Qui neque repudiandae ut
        doloribus expedita quidem rem possimus corrupti alias. Voluptas maiores
        ipsa facilis eos non delectus illo cupiditate nam possimus, quos ipsam
        quis est soluta eligendi doloremque doloribus nihil accusamus itaque.
        Fugit impedit expedita ut sequi dolor illo pariatur. Sint est ad, eius
        sapiente laboriosam similique quaerat qui quo incidunt necessitatibus,
        pariatur quasi repudiandae optio. Ipsum quo dolores cumque qui nihil
        sint assumenda laboriosam ex ea! Assumenda, similique vero! Quas,
        magnam? Minima quidem voluptatum cumque deleniti nam incidunt nostrum
        laudantium consequuntur amet ipsam obcaecati nihil, laborum voluptate
        vitae. Dolor, quae ad? Perspiciatis repudiandae eos asperiores? Dolorum,
        quod dicta! Laboriosam. Illum nostrum dicta temporibus quod impedit
        asperiores possimus aliquam quis. Sed nam cupiditate perferendis numquam
        accusantium totam possimus molestiae, cum nulla esse. Consequatur modi
        fugit sapiente facilis corporis odit eveniet. Mollitia consequuntur,
        nobis ducimus fugiat, dolor quae ullam rerum laboriosam veniam officia
        animi, veritatis labore quaerat id voluptates ipsa rem nisi at in magnam
        iusto consectetur! Natus voluptate consectetur excepturi? Repudiandae,
        dolorum, et quas nisi iure necessitatibus reprehenderit obcaecati ut
        natus dolorem quia ex at vel in voluptatibus debitis mollitia, ducimus
        molestias. Aperiam voluptatem harum quisquam laboriosam in possimus et?
        Excepturi laudantium, itaque velit quae quibusdam ab nesciunt voluptates
        labore iste tempora eligendi nulla magni doloremque aut recusandae
        quaerat in natus veritatis autem dolorem, soluta molestiae sint
        architecto facere. Vitae? Consequuntur autem minima totam eligendi
        deleniti eveniet, itaque excepturi omnis quibusdam. Id esse explicabo
        minus perspiciatis impedit tempore expedita iste! Quo totam modi minus
        error doloribus minima a aut accusamus? Autem, saepe non quasi aliquam
        explicabo qui dolor similique incidunt facilis dolorum magnam
        temporibus. Praesentium maxime alias, eveniet, rerum velit temporibus
        reprehenderit, eaque sunt inventore labore voluptatem? Accusamus, sequi
        dolorum! Eveniet dolorem velit tempora animi natus hic odio. Eaque
        maiores magnam dolor esse nostrum porro harum deserunt obcaecati enim
        rerum odio quam, ex sunt quia atque, libero veritatis vitae! Placeat?
        Obcaecati voluptatum molestiae numquam. Blanditiis, nam vel! Accusantium
        velit molestiae cupiditate atque veritatis fuga unde, dolorum ducimus
        eveniet dignissimos facilis dolore aut dicta iusto asperiores, maxime
        dolorem! Nobis, architecto delectus. Eveniet odio laudantium esse id.
        Praesentium ipsum molestiae, eaque facilis itaque quam iusto iste ullam
        dolor non sed amet maxime veritatis ex perferendis labore magnam
        officia? Eaque ullam aliquid quidem? Beatae libero reiciendis ipsam rem,
        et commodi minus molestias totam autem eius tempora vel soluta quis
        praesentium officia quod rerum in quos tenetur blanditiis, nam itaque
        dicta voluptatibus perspiciatis. Similique. Quis, distinctio doloribus
        laudantium ut id ratione, perspiciatis porro consequatur assumenda
        doloremque, molestiae qui eum aliquam dicta ipsa minus quam modi
        consequuntur. Non consectetur incidunt perferendis unde, expedita odit
        harum. Atque qui nisi cumque corporis tempora suscipit quaerat. Sapiente
        veritatis quisquam aut eaque deserunt? Ratione quasi, a quos iusto fugit
        beatae quae ipsum atque modi cumque, odio culpa! Aut, sint. Quo
        aspernatur animi esse iusto reiciendis recusandae accusamus quas, saepe
        autem assumenda, corrupti dolor modi. Tempora vero, excepturi
        dignissimos, voluptatibus aut sequi, error recusandae velit repudiandae
        adipisci eos cumque porro! Qui dolores hic possimus similique ullam
        doloribus. Cum vitae voluptatibus ea optio dolores quia maiores
        distinctio soluta cupiditate architecto? Consequuntur, at natus! Vel
        minus porro esse illo accusantium! Ipsam, animi. Nulla blanditiis
        quisquam architecto dignissimos distinctio porro alias tenetur quae
        autem, quidem iure fugit dolor ipsa praesentium doloremque officiis
        veniam quas aspernatur rem molestiae officia ipsam voluptatibus mollitia
        debitis. Id. Velit esse reprehenderit natus, accusantium sit voluptatem
        veniam excepturi quasi nobis id delectus adipisci quidem temporibus quos
        nam assumenda facilis harum labore, fuga voluptate ad at. Officia
        dignissimos voluptate nisi! Laboriosam natus, molestias voluptate
        tenetur neque nisi totam aspernatur officia necessitatibus quo autem
        earum, excepturi architecto inventore quaerat expedita fugiat non ex
        odio iure ut omnis. Deserunt tenetur vitae quo? Molestias nisi beatae
        quas tempora fuga at. Beatae error voluptates corporis harum nesciunt
        eligendi id odio! Autem blanditiis, perferendis illo quo enim cupiditate
        impedit aliquid cumque iste quae quas magni! Esse nostrum quidem,
        voluptatibus doloribus optio in nihil pariatur excepturi molestias
        saepe, vitae eveniet a non! Ea, deserunt? Illo, quidem officiis.
        Recusandae enim nemo laboriosam cum delectus at hic ea! Nobis, incidunt?
        Incidunt alias magni rem quam amet cupiditate repellat placeat! Iusto ut
        dolores assumenda inventore consectetur fugit incidunt, saepe asperiores
        deleniti? Perspiciatis quis dolore numquam veritatis dolorem molestias
        ex.
      </motion.p>
    </div>
  );
}

export default Box5;

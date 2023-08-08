import { TextAnimation } from '@/components';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {

   const [showText, setShowText] = useState(0)
   const [showButton, setShowButton] = useState(0)
   const [showKado, setShowKado] = useState("")
   const [bg, setBg] = useState("bg-black")

   const playing = () => {
      
      setShowButton("-")
      setShowText(1)
      const audio = new Audio('/sfx/typing.mp3');
      audio.play();

   };

   const buttonBaik = () => {
      setShowButton("-")
      setShowText("baik")
      const audio = new Audio('/sfx/switch.mp3');
      audio.play();
      const audio2 = new Audio('/sfx/typing.mp3');
      audio2.play();
   };
   const buttonTidakBaik = () => {
      setShowButton("-")
      setShowText("tidak-baik")
      const audio = new Audio('/sfx/switch.mp3');
      audio.play();
      const audio2 = new Audio('/sfx/typing.mp3');
      audio2.play();
   };

   const buttonHias = () => {
      setBg("bg-[url('/img/bedroom.png')]")
      setShowButton("-")
      setShowText("hias")

      const audio = new Audio('/sfx/door.mp3');
      audio.play();

      const audio2 = new Audio('/sfx/hbd-jamrud-acoustic.mp3');
      audio2.play();
      audio2.currentTime = 8

      setTimeout(() => {
         audio2.pause();
      }, 10000);
   };

   const buttonFinal = () => {

      setShowKado("")
      setBg("bg-[url('/img/bedroom.png')]")
      setShowButton("-")
      setShowText("final")

      const audio = new Audio('/sfx/blast.mp3');
      audio.play();

      setTimeout(() => {

         const audio2 = new Audio('/sfx/hbd.mp3');
         audio2.play();
         audio2.loop = true
         
      }, 1500);

      setTimeout(() => {

        location.reload()
         
      }, 180000);
      
   };

   return (
      <div
         className={`flex min-h-screen flex-col items-center justify-center p-12 ${bg} bg-cover bg-center`}
      >
         <div className="text-3xl font-bold text-white text-center">

            {showText == 1 &&
               <TextAnimation
                  text={[
                     'Hay,',
                     2000,
                     'Bagaimana Kabarmu ?',
                     () => {
                        setShowButton(1)
                        console.log('Sequence completed');
                     },
                  ]}
               />
            }

            {showText == "baik" &&
               <TextAnimation
                  text={[
                    
                     'syukurla kalau baik',
                     2000,
                     'aku jadi senang mendengarnya. :)',
                     2000,
                     'aku ada sesuatu. lihat ya',
                     () => {
                        setShowButton(2)
                        console.log('Sequence completed');
                     },
                  ]}
               />
            }

            {showText == "tidak-baik" &&
               <TextAnimation
                  text={[
                     'kenapa tidak baik?,',
                     2000,
                     'semoga tidak ada apa-apa ya',
                     2000,
                     'doaku terbaik buatmu. :)',
                     2000,
                     'aku ada sesuatu. lihat ya',
                     () => {
                        setShowButton(2)
                        console.log('Sequence completed');
                     },
                  ]}
               />
            }

            {showText == "hias" &&
               <>
                  <div>
                     <Image
                        className='absolute left-0 top-0'
                        src="/img/flag-left.png"
                        alt="flag"
                        width={200}
                        height={100}
                     />
                     <Image
                        className='absolute right-0 top-0'
                        src="/img/flag-right.png"
                        alt="flag"
                        width={200}
                        height={100}
                     />
                     <Image
                        className='absolute left-0 top-24'
                        src="/img/balloon-left.png"
                        alt="flag"
                        width={150}
                        height={100}
                     />
                     <Image
                        className='absolute right-0 top-24'
                        src="/img/balloon-right.png"
                        alt="flag"
                        width={150}
                        height={100}
                     />
                     <div>
                        <TextAnimation
                           text={[
                              'Selamat Ulang Tahun',
                              2000,
                              'Dias Tiatin. :)',
                              () => {
                                 setShowKado("yes")
                                 console.log('Sequence completed');
                              },
                           ]}
                        />
                     </div>

                     {showKado == "yes" &&
                        <Image
                           onClick={buttonFinal}
                           className='absolute mt-5'
                           src="/img/gift.png"
                           alt="flag"
                           width={150}
                           height={100}
                        />
                     }

                  </div>

               </>
            }

            {showText == "final" &&
               <>
                  <div>
                     <Image
                        className='absolute left-0 top-0'
                        src="/img/flag-left.png"
                        alt="flag"
                        width={200}
                        height={100}
                     />
                     <Image
                        className='absolute right-0 top-0'
                        src="/img/flag-right.png"
                        alt="flag"
                        width={200}
                        height={100}
                     />

                  </div>

                  <div className="container">
                  <p className="moving-text text-lg">
                     Selamat Ulang Tahun
                     <br/><br/>
                     Hari ini, tepat di tanggal 13 Agustus, adalah hari yang istimewa. Selamat ulang tahun untukmu, Dias Tiatin. Meskipun hubungan kita telah berakhir, ingatlah bahwa kita pernah bersama dalam perjalanan yang panjang selama enam tahun.
                     <br/><br/>
                     Hari ini, aku ingin mengenang kenangan indah yang pernah kita bagi bersama. Meskipun ada perasaan sedih karena kita tidak lagi bersama, aku juga merasa bahagia karena pernah mengalami momen-momen tak terlupakan denganmu.
                     <br/><br/>
                     Enam tahun adalah waktu yang cukup lama untuk membangun kisah cinta yang berarti. Ada banyak kenangan indah, tawa, dan canda yang telah kita bagi bersama. Walaupun saat ini kita telah menjalani jalur yang berbeda, aku berterima kasih atas waktu yang telah kita habiskan bersama.
                     <br/><br/>
                     Semoga di ulang tahunmu yang ini, kamu dikelilingi oleh orang-orang yang menyayangimu dan membuatmu bahagia. Ingatlah bahwa ada begitu banyak peluang baru dan kebahagiaan yang menanti di masa depan begitupun aku yang selalu menanti dan mengharapmu.
                     <br/><br/>
                     Aku ingin mengingatkanmu untuk tetap kuat dan optimis menghadapi apa pun yang ada di depan. Setiap perpisahan membuka jalan untuk pertemuan baru dan peluang baru. Jadikan hari ini sebagai permulaan dari babak baru dalam hidupmu dan tentunya untuk kita berdua.
                     <br/><br/>
                     Ingatlah bahwa aku selalu berharap yang terbaik untukmu. Semoga kamu mencapai segala impianmu dan menjadi pribadi yang lebih baik dari hari ke hari. Selamat ulang tahun, Dias Tiatin. Semoga hari ini menjadi spesial dan penuh dengan cinta dan harapan.
                     <br/><br/>
                     Selamat ulang tahun sekali lagi dan semoga kebahagiaan selalu menyertaimu.
                     <br/><br/>
                     Salam,
                     Toni Ismail

                  </p>
                  </div>

               </>
            }

         </div>

         {showButton == 0 &&
            <>
               <button onClick={playing} className="absolute bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Click Me
               </button>
            </>
         }

         {showButton == 1 &&
            <>
               <button onClick={buttonTidakBaik} className="absolute bottom-5 right-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Tidak Baik
               </button>

               <button onClick={buttonBaik} className="absolute bottom-5 left-5 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Baik
               </button>
            </>
         }

         {showButton == 2 &&
            <>
               <button onClick={buttonHias} className="absolute bottom-5 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Click Me
               </button>
            </>
         }

         {showKado == "yes" &&
            <>
               <div className="absolute bottom-5 text-white font-bold py-2 px-4 rounded">
                  Buka Kado (Click)
               </div>
            </>
         }

      </div>
   )
}

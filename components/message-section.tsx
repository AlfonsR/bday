"use client"

import { useEffect, useRef, useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { NeonGradientCard } from "./ui/neon-gradient-card"
import Image from "next/image"
import { AuroraText } from "./ui/aurora-text"
import { AnimatePresence, motion } from "framer-motion"
import { TypingAnimation } from "./ui/typing-animation"
import { X } from "lucide-react"

export default function MessageSection() {
  const messageRef = useRef<HTMLDivElement>(null)
  const [titit, setTitit] = useState<boolean>(false)
  const [tutut, setTutut] = useState<boolean>(false)

  const [isOpen, setIsOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (messageRef.current) {
      observer.observe(messageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setShowButton(false)
      setTutut(false)
      setTitit(false)
      return
    }   // only start timeout when dialog opens

    const timer = setTimeout(() => {
      setShowButton(true)
    }, 20500)

    return () => clearTimeout(timer)
  }, [isOpen])


  return (
    <section id="message" className="py-20 px-6 bg-linear-to-b from-rose-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -mr-48"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            ref={messageRef}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-rose-100/50 opacity-0"
            style={{
              animation: "fadeInUp 1s ease-out 0.3s forwards",
            }}
          >
            <h3 className="text-3xl font-light mb-6 text-gray-900">A Message For My Love</h3>

            <div className="space-y-4 text-gray-700 font-light leading-relaxed text-justify">
              <p>
                  Hallo cayanggg😘😘😘baaa nda expectt kann ehehehe howhowww apaka menayikk??👀👀👀cemogahh cayang cukakkkk!!
              </p>
              <p>
                In this very special day, cayangmu mau ngaci cayangg bukan hanya kadoo, but also a dairy. A dairy of our life, our cutie koala family life🤍
              </p>
              <p>
                Di tempat cpecial inii, kita bica nyimpen cemoamoah memorii yang kita punyaa, cemoahh fotoo, cemoahh tekss, epritingg yang epritinggg ehehhee
              </p>
              <p>
                I hope you like it cayanggg!! And this is not the final productt lo yaa. Karna untuk jadi cecuatu yang cpeciall, cayangmu nda bisa cendiyii, tapi ur prince need my princess to make our e-home cpeciall! Ayokkk cayangg di ici iciii teyuss cupayahh jadi tambah umumumumuuuu tambah cpeciall lagiii🥰🥰🥰
              </p>
              And again,
              <p className="text-lg text-rose-400 font-medium pt-4 flex text-center">Happiest Birthday to my very special person, my future wife! 💕</p>


              
            </div>

            {/* <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div> */}
          </div>
        </motion.div>
        <div className=" mt-4 shadow-xl w-fit">
          <Dialog onOpenChange={setIsOpen}>
              <form>
                <DialogTrigger asChild>
                  <Button variant="outline">ada ciapa jugak nii</Button>
                </DialogTrigger>
                <DialogContent showCloseButton={false} className="sm:max-w-[425px] h-5/6 bg-white border-transparent">
                <DialogTitle></DialogTitle>
                  <div className="w-full h-full overflow-y-auto items-center justify-center text-center">
                    <Image src={'/image/tututtitit.webp'} alt="Tutut Titit Happy Birthday" width={1000} height={1000} className="w-full h-fit rounded-lg"/>
                    <motion.div
                      key="surprise-text"
                      initial={{ opacity: 0, scale: 0.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="mt-4"
                    >
                      <div className="font-bold text-xl"><AuroraText colors={["#ff00d0", "#ff337a", "#ff57d5", "#ffabe9"]}>BAAAAAAA HAPPY BIRTHDAYYY MAMAAAAA!!!</AuroraText></div>
                      <div className="text-start p-2 border rounded-md mt-4">
                        <div className="py-0.5">
                        <TypingAnimation typeSpeed={50} delay={3000} className="p-0 leading-0 text-pink-500">
                        Tit: Ihhhh titit duluuu yang ngomong huhhhh
                        </TypingAnimation></div>
                        <div className="py-0.5">
                        <TypingAnimation typeSpeed={50} delay={6000} className="p-0 leading-0 text-blue-500">
                        Tut: Yaa calahmuu titt, tuu mama dah nungguinn surprisenya tpi kamu bengong kayak 😦
                        </TypingAnimation></div>
                        <div className="py-0.5">
                        <TypingAnimation typeSpeed={50} delay={12000} className="p-0 leading-0 text-pink-500">
                        Tit: Lohh yaa kann mama baru bukakkk, koko yang kecepetann huhhh!! MAAA KOKO NAKALLLL
                        </TypingAnimation></div>
                        <div className="py-0.5">
                        <TypingAnimation typeSpeed={50} delay={18000} className="p-0 leading-0 text-blue-500">
                        Tut: MAAA TITITT LEBAYYYY
                        </TypingAnimation>
                        </div>
                        {showButton &&
                          <motion.div
                            key="button-text"
                            initial={{ opacity: 0, scale: 0.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="flex w-full gap-2 justify-center"
                          >
                            <Button className="bg-blue-500" onClick={() => [setTutut(true), setShowButton(false)]}>Dukung Tutut</Button>
                            <Button className="bg-pink-500" onClick={() => [setTitit(true), setShowButton(false)]}>Dukung Titit</Button>
                          </motion.div>
                        }
                        {titit && 
                          <>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={500}  className="p-0 leading-0 text-pink-500">
                                Tit: Nahhh mama cetuju tuuu huhhh koko nakalll
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={4000} className="p-0 leading-0 text-blue-500">
                                Tut: LOHHH MAAA KOK NGEDUKUNGG TITITTTT😡😡😡😡kankankannn mamaa hayusnyaa dukung tututttt
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={10000} className="p-0 leading-0">
                                HIPPO: Heeii heeiiii apaniii kok ribut-ributt anak anakkuu?? Ini papa dari surabaya aja dengerr ributnyaa
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={17500} className="p-0 leading-0 text-pink-500">
                                Tit: Ini loo paaa kokoo nakalll, kann mama lagi ultahhh jadi titit excitedd mau ngerayainnn!!
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={24000} className="p-0 leading-0 text-blue-500">
                                Tut: Lahh tututt juga mau ngerayainnnn
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={27000} className="p-0 leading-0">
                                HIPPO: Hududuuduu inii koalaa familyy cocwitt upuoyuu nii mama koalaa ultahh langcung hebohh dan cemangad cemuahh yaahh??
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={35500} className="p-0 leading-0 text-purple-600">
                                Tut & Tit: Hoohhhhhhhhhh!!!!!!!!!!!
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={38000} className="p-0 leading-0">
                                HIPPO: Imudnyaahh nii anak anakk kitaa cayangg, emang jelass turunan langcungg dayii cayangkuu niii🥰🥰🥰
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={45500} className="p-0 leading-0 text-blue-500">
                                Tut: Ehh yang penting mamaa lagii ultahh yayyy harus hepihepii tittt, ndaboye tengkarr
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={51500} className="p-0 leading-0 text-pink-500">
                                Tit: Hoohh hoohhh, happy birthdayy mamaaa yang paying hebadd cepanjang macahh, tititt cayangg upuoyuuu camah mamaaa😘😘😘
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={59500} className="p-0 leading-0 text-blue-500">
                                Tut: Lohh tututt jugakk cayangg upuoyuu camah mamaa, nda cumaa titittt😘😘😘
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={65500} className="p-0 leading-0">
                                HIPPO: Lohlohhh papa yang paying cinta upuoyuuu camah mamamuuu wekkkk ni punya papaa cemuahhhh😘😘😘😘😘😘😘😘
                              </TypingAnimation>
                            </div>
                          </>
                        }
                        {tutut && 
                          <>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={500} className="p-0 leading-0 text-blue-500">
                                Tut: Yekkkk tuu kann tututt yang benerr wekkk
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={4000} className="p-0 leading-0 text-pink-500">
                                Tit: LOHHHHH MAAAA😢😢😢 tititt camah papahh ajahhh huhhhhh!! PAAA tolonggg ni tititt dipojokinnn huhuhuu
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={30} delay={11000} className="p-0 leading-0">
                                HIPPO: Loh lohh ada apaa inii?? ckckckkck tuttt itu adikmuu nda boye digituinn looo, kan cama camaa merayakann hayii yang cpeciall upuoyuuu tuu untukk mama koalaaa yg paying hebadd upuoyuuu😘😘😘(dan paying cekcii upuoyuu untuk papamuhhh🥵🥵🥵 ehehehehhe)
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={20500} className="p-0 leading-0 text-blue-500">
                                Tut: Ehh papa bisik bisikk apahh barucann yaa?? CUSPICIUSS nii titttt🧐🧐🧐🧐
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={26000} className="p-0 leading-0 text-pink-500">
                                Tit: Iyanii koo kayaknya tadi papaa ada ngomongg cecuatuuu🧐🧐🧐ni ni niii nyembunyiinn apaniii????
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={33500} className="p-0 leading-0 text-blue-500">
                                Tut: PAPA CAMAH MAMA MAU BIKINN TETETT YAAA????
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={35000} className="p-0 leading-0">
                                HIPPO: Lohhh klo proses pembuatannyaa cii cetiapp hayi cetiap caatt tutt, iyakann cayanggg??😉😉😉
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={42500} className="p-0 leading-0 text-blue-500">
                                Tut: Hiiiiii pornoo jorokkk wekkkkk
                              </TypingAnimation>
                            </div>
                            <div className="py-0.5">
                              <TypingAnimation typeSpeed={50} delay={45000} className="p-0 leading-0 text-pink-500">
                                Tit: Mantabb paa teruskann paaa👍🏻👍🏻👍🏻👍🏻
                              </TypingAnimation>
                            </div>
                          </>
                        }
                      </div>
                      <DialogClose asChild className="mt-2">
                        <Button variant="destructive"><X className="text-white" size={15}/></Button>
                      </DialogClose>
                    </motion.div>
                  </div>
                </DialogContent>
              </form>
            </Dialog>
            </div>
      </div>
    </section>
  )
}

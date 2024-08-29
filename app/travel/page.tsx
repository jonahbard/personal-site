import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="bg-black">
      <h1 className="text-4xl text-white font-black mx-8 lg:mx-24 pt-24 lg:pt-40 bg-black mb-5 font-title">
        <Link href="/" className="font-light italic text-gray-200 font-title">Jonah Bard //  </Link>
        &nbsp;Travel
      </h1>
      <div className="mx-8 lg:mx-24 flex flex-col justify-center bg-black space-y-[0.5rem] pb-32">
      <p className="text-white pt-4 lg:pt-10 font-body">Amsterdam, Netherlands  •  Florence, Italy </p>
        <Image 
          src="/amsterdam+florence.png" 
          alt="Amsterdam and Florence" 
          width={1500} 
          height={500}
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
          sizes="(max-width: 3000px) 100vw, (max-width: 3000px) 50vw, 33vw"
        />
        <p className="text-white pt-4 lg:pt-10 font-body">Sachsische-Schweiz, Germany  •  Izmir, Turkey </p>
        <Image 
          src="/saxon+izmir.png" 
          alt="Saxon and Izmir" 
          width={1500} 
          height={500}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
          sizes="(max-width: 3000px) 100vw, (max-width: 3000px) 50vw, 33vw"
        />
        <p className="text-white pt-4 lg:pt-10 font-body">Venice, Italy  •  Bolzano, Italy </p>
        <Image 
          src="/venice+bolzano.png" 
          alt="Venice and Bolzano" 
          width={1500} 
          height={500}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
          sizes="(max-width: 3000px) 100vw, (max-width: 3000px) 50vw, 33vw"
        />
        <p className="text-white pt-4 lg:pt-10 font-body">Meteora, Greece  •  Fez, Morocco </p>
        <Image 
          src="/meteora+fez.png" 
          alt="Meteora and Fez" 
          width={1500} 
          height={500}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
          sizes="(max-width: 3000px) 100vw, (max-width: 3000px) 50vw, 33vw"
        />
        <p className="text-white pt-4 lg:pt-10 font-body">Konak, Turkey  •  Railay Beach, Thailand </p>
        <Image 
          src="/konak+railay.png" 
          alt="Konak and Railay" 
          width={1500} 
          height={500}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
          sizes="(max-width: 3000px) 100vw, (max-width: 3000px) 50vw, 33vw"
          />
      </div>
    </div>
  )
}
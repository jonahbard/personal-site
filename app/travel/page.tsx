import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl font-bold mx-8 lg:mx-24 mt-40 mb-5">Travel</h1>
      <div className="mx-8 lg:mx-24 flex flex-col justify-center space-y-[1.125rem] mb-32">
        <Image src="/amsterdam+florence.png" alt="Amsterdam" width={1500} height={500}/>
        <Image src="/saxon+izmir.png" alt="Railay" width={1500} height={500}/>
        <Image src="/venice+bolzano.png" alt="Izmir"width={1500} height={500} />
        <Image src="/meteora+fez.png" alt="Fez" width={1500} height={500}/>
      </div>
    </div>

  );
}
import Image from 'next/image';
export default function Page() {
  return (
    <div className="m-3 md:m-10 flex flex-col">
      <div className="flex flex-row w-full">
        <Image src="/amsterdam.png" alt={''} width={250} height={25} className="p-2"/>
        <Image src="/florence.png" alt={''} width={400} height={250} className="p-2"/>
        <Image src="/fez.png" alt={''} width={250} height={25} className="p-2"/>
        <Image src="/railay.png" alt={''} width={400} height={25}className="p-2"/>
      </div>
      <div className="flex flex-row w-full">
        <Image src="/saxon.png" alt={''} width={400} height={25} className="p-2"/>
        <Image src="/venice.png" alt={''} width={250} height={25} className="p-2"/>
        <Image src="/meteora.png" alt={''} width={400} height={250} className="p-2"/>
        <Image src="/izmir.png" alt={''} width={250} height={25} className="p-2"/>
      </div>
    </div>
  );
}

// PDFTable.js

import React from "react";

function EditableField({ label, value, icon }) {
  return (
    <div className="flex gap-5 justify-between mt-2.5 w-full whitespace-nowrap">
      <div className="my-auto text-2xl">{label}</div>
      <div className="flex gap-5 justify-between text-lg">
        <div className="my-auto">{value}</div>
        <img src={icon} alt="" className="shrink-0 w-5 border-white border-solid aspect-[0.56] border-[3px] stroke-[3px] stroke-white" />
      </div>
    </div>
  );
}

function Divider() {
  return <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed054f0339a958ed1661acbf9c18dab58596dc598989c697712738c8a5882e7f?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="mt-3 w-full stroke-[3px] stroke-zinc-300" />;
}

function PDFTable({ reservation }) {
  return (
    <div className="flex flex-col pt-12 pb-20 rounded border-solid bg-neutral-800 border-[3px] border-neutral-800 max-w-[776px]">
      <h1 className="self-center text-8xl font-extrabold tracking-tighter text-center text-white leading-[105.6px] max-md:text-4xl">
        Esmeralda
      </h1>
      <div className="flex flex-col items-center pl-9 mt-20 w-full text-stone-100 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between self-stretch py-3.5 pr-20 pl-4 w-full whitespace-nowrap bg-stone-100 text-neutral-800 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="my-auto text-2xl font-bold">Name</div>
          <div className="flex gap-5 justify-between text-lg">
            <div className="my-auto">{reservation.name}</div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/85785c4fde320f2aed4005825b9c7420f7e2fd047f521490a870980779277f40?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" alt="" className="shrink-0 w-5 border-solid aspect-[0.56] border-[3px] border-neutral-800 fill-neutral-800 stroke-[3px] stroke-neutral-800" />
          </div>
        </div>
        <EditableField label="Date" value={reservation.date} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/11bc0b4e844552d7408fd8ede2997c1c20ab72e316750bc5ff0369fd87505d30?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" />
        <Divider />
        <EditableField label="Time" value={reservation.timing} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/dfe45debbcf29d026a624e69e3dfe54e6bf6ea0f90e79399dc842299be264636?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" />
        <Divider />
        <EditableField label="Capacity" value={reservation.capacity} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c2d1b55e9b28f4063f3c42491cb2e64ae28801326cc2650869c24f9a792e7c63?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" />
        <Divider />
        <EditableField label="Email" value={reservation.email} icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c2d1b55e9b28f4063f3c42491cb2e64ae28801326cc2650869c24f9a792e7c63?apiKey=9fe8dc76776646f4a6bc648caa0a3bac&" />
      </div>
    </div>
  );
}

export default PDFTable;

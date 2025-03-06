import React from 'react';

const Schedule = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-center text-4xl font-bold mb-8 flex justify-center gap-2">
        <span className="text-[#FF00BF]">HORARIO</span>
        <span className="text-[#04FFF7]">OLÁ</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {/* Días de la semana */}
        <div>
          <h3 className="text-2xl font-bold underline text-white text-center mb-4">LUNES</h3>
          <div className="grid gap-4">
            <div className="border-2 border-[#2FECFF] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#2FECFF] text-xl">DANZA ESPECTÁCULO</h4>
                <p className="text-[#2FECFF]">NIVEL I</p>
              </div>
              <div>
                <p className="text-white">17:00 HRS</p>
                <p className="text-[#2FECFF]">(6 A 12 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-[#806CFF] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#806CFF] text-xl">STREET</h4>
              </div>
              <div>
                <p className="text-white">18:00 HRS</p>
                <p className="text-[#806CFF]">(+13 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-white p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-white text-xl">SEXY STYLE HEELS</h4>
              </div>
              <div>
                <p className="text-white">19:00 HRS</p>
                <p className="text-white">(+14 AÑOS)</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold underline text-white text-center mb-4">MARTES</h3>
          <div className="grid gap-4">
            <div className="border-2 border-[#CA67FF] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#CA67FF] text-xl">DANZA ESPECTÁCULO</h4>
              </div>
              <div>
                <p className="text-white">17:00 HRS</p>
                <p className="text-[#CA67FF]">(6 A 12 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-[#FFF50B] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#FFF50B] text-xl">JAZZ DANCE (BÁSICO)</h4>
              </div>
              <div>
                <p className="text-white">18:00 HRS</p>
                <p className="text-[#FFF50B]">(JUVENIL/ADULTO)</p>
              </div>
            </div>
            <div className="border-2 border-[#F60AD0] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#F60AD0] text-xl">JAZZ DANCE</h4>
                <p className="text-[#F60AD0]">INTER/AVANZADO</p>
              </div>
              <div>
                <p className="text-white">19:00 HRS</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold underline text-white text-center mb-4">MIÉRCOLES</h3>
          <div className="grid gap-4">
            <div className="border-2 border-[#9DFFA7] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#9DFFA7] text-xl">MODERNO/<br />CONTEMPO</h4>
              </div>
              <div>
                <p className="text-white">PRÓXIMAMENTE</p>
                <p className="text-[#9DFFA7]">(+12 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-[#806CFF] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#806CFF] text-xl">STREET (REGGAETON)</h4>
              </div>
              <div>
                <p className="text-white">18:30 HRS</p>
                <p className="text-[#806CFF]">(+13 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-[#FF6B00] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#FF6B00] text-xl">GIRLY</h4>
              </div>
              <div>
                <p className="text-white">19:30 HRS</p>
                <p className="text-[#FF6B00]">(+14 AÑOS)</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold underline text-white text-center mb-4">JUEVES</h3>
          <div className="grid gap-4">
            <div className="border-2 border-[#CA67FF] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#CA67FF] text-xl">DANZA ESPECTÁCULO</h4>
              </div>
              <div>
                <p className="text-white">17:00 HRS</p>
                <p className="text-[#CA67FF]">(6 A 12 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-[#FFF50B] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#FFF50B] text-xl">JAZZ DANCE (BÁSICO)</h4>
              </div>
              <div>
                <p className="text-white">18:00 HRS</p>
                <p className="text-[#FFF50B]">(JUVENIL/ADULTO)</p>
              </div>
            </div>
            <div className="border-2 border-[#F60AD0] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#F60AD0] text-xl">JAZZ DANCE</h4>
                <p className="text-[#F60AD0]">INTER/AVANZADO</p>
              </div>
              <div>
                <p className="text-white">19:00 HRS</p>
              </div>
            </div>
            <div className="border-2 border-[#FFE494] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#FFE494] text-xl">BALLROOM</h4>
              </div>
              <div>
                <p className="text-white">20:00 HRS</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold underline text-white text-center mb-4">VIERNES</h3>
          <div className="grid gap-4">
            <div className="border-2 border-[#FF99EB] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#FF99EB] text-xl">INICIACIÓN A LA DANZA</h4>
                <p className="text-[#FF99EB]">INTERMEDIO</p>
              </div>
              <div>
                <p className="text-white">16:00 HRS</p>
              </div>
            </div>
            <div className="border-2 border-[#FF2D72] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#FF2D72] text-xl">TIK TOK DANCE</h4>
              </div>
              <div>
                <p className="text-white">17:00 HRS</p>
                <p className="text-[#FF2D72]">(+6 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-[#00FFF7] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#00FFF7] text-xl">DANCE KIDS</h4>
                <p className="text-[#00FFF7]">NIVEL II</p>
              </div>
              <div>
                <p className="text-white">18:00 HRS</p>
              </div>
            </div>
            <div className="border-2 border-[#FF0000] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#FF0000] text-xl">CHAIR DANCE</h4>
              </div>
              <div>
                <p className="text-white">19:00 HRS</p>
                <p className="text-[#FF0000]">(JUVENIL/ADULTO)</p>
              </div>
            </div>
            <div className="border-2 border-[#7700FF] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#7700FF] text-xl">BROADWAY SHOW</h4>
              </div>
              <div>
                <p className="text-white">20:00 HRS</p>
                <p className="text-[#7700FF]">(JUVENIL/ADULTO)</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold underline text-white text-center mb-4">SÁBADO</h3>
          <div className="grid gap-4">
            {/* <div className="border-2 border-[#C0AFE2] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#C0AFE2] text-xl">BALLET</h4>
                <p className="text-[#C0AFE2]">JUVENIL/ADULTO</p>
              </div>
              <div>
                <p className="text-white">9:00 HRS</p>
              </div>
            </div> */}
            <div className="border-2 border-[#FF99EB] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#FF99EB] text-xl">INICIACIÓN A LA DANZA</h4>
              </div>
              <div>
                <p className="text-[#FF99EB]">INICIAL</p>
                <p className="text-white">10:00 HRS</p>
              </div>
              <div>
                <p className="text-[#FF99EB]">(+4 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-[#00FFF7] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#00FFF7] text-xl">DANCE KIDS</h4>
                <p className="text-[#00FFF7]">NIVEL I</p>
              </div>
              <div>
                <p className="text-white">11:00 HRS</p>
              </div>
              <div>
                <p className="text-cyan-400">(+6 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-[#24FF00] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#24FF00] text-xl">FULL DANCE</h4>
              </div>
              <div>
                <p className="text-white">12:00 HRS</p>
                <p className="text-[#24FF00]">(+6 AÑOS)</p>
              </div>
            </div>
            {/* <div className="border-2 border-[#9DFFA7] p-4 rounded-lg schedule-card flex flex-col justify-between min-h-[165px]">
              <div>
                <h4 className="text-[#9DFFA7] text-xl">LYRICAL</h4>
              </div>
              <div>
                <p className="text-white">13:00 HRS</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-[#FF99EB]">Inicio de clases: Marzo 2025</p>
        <p className="text-sm text-gray-400 mt-2">* Los horarios pueden estar sujetos a cambios*</p>
      </div>
    </div>
  );
};

export default Schedule; 
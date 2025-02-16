import React from 'react';

const Schedule = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
        HORARIO OLA
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {/* Días de la semana */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold underline text-white">LUNES</h3>
          <div className="space-y-4 h-full">
            <div className="border-2 border-cyan-400 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-cyan-400 text-xl">DANZA ESPECTÁCULO</h4>
                <p className="text-cyan-400">NIVEL I</p>
              </div>
              <div>
                <p className="text-white">17:00 HRS</p>
                <p className="text-cyan-400">(6 A 12 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-purple-400 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-purple-400 text-xl">STREET</h4>
              </div>
              <div>
                <p className="text-white">18:00 HRS</p>
                <p className="text-purple-400">(+13 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-white p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
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

        <div className="space-y-4">
          <h3 className="text-2xl font-bold underline text-white">MARTES</h3>
          <div className="space-y-4 h-full">
            <div className="border-2 border-purple-500 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-purple-500 text-xl">DANZA ESPECTÁCULO</h4>
              </div>
              <div>
                <p className="text-white">17:00 HRS</p>
                <p className="text-purple-500">(6 A 12 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-yellow-400 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-yellow-400 text-xl">JAZZ DANCE (BÁSICO)</h4>
              </div>
              <div>
                <p className="text-white">18:00 HRS</p>
                <p className="text-yellow-400">(JUVENIL/ADULTO)</p>
              </div>
            </div>
            <div className="border-2 border-pink-500 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-pink-500 text-xl">JAZZ DANCE</h4>
              </div>
              <div>
                <p className="text-pink-500">INTER/AVANZADO</p>
                <p className="text-white">19:00 HRS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold underline text-white">MIÉRCOLES</h3>
          <div className="space-y-4 h-full">
            <div className="border-2 border-green-400 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-green-400 text-xl">MODERNO/<br />CONTEMPO</h4>
              </div>
              <div>
                <p className="text-white">17:30 HRS</p>
                <p className="text-green-400">(+12 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-purple-400 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-purple-400 text-xl">STREET (REGGAETON)</h4>
              </div>
              <div>
                <p className="text-white">18:30 HRS</p>
                <p className="text-purple-400">(+13 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-orange-400 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-orange-400 text-xl">GIRLY</h4>
              </div>
              <div>
                <p className="text-white">19:30 HRS</p>
                <p className="text-orange-400">(+14 AÑOS)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold underline text-white">JUEVES</h3>
          <div className="space-y-4 h-full">
            <div className="border-2 border-purple-500 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-purple-500 text-xl">DANZA ESPECTÁCULO</h4>
              </div>
              <div>
                <p className="text-white">17:00 HRS</p>
                <p className="text-purple-500">(6 A 12 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-yellow-400 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-yellow-400 text-xl">JAZZ DANCE (BÁSICO)</h4>
              </div>
              <div>
                <p className="text-white">18:00 HRS</p>
                <p className="text-yellow-400">(JUVENIL/ADULTO)</p>
              </div>
            </div>
            <div className="border-2 border-pink-500 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-pink-500 text-xl">JAZZ DANCE</h4>
              </div>
              <div>
                <p className="text-pink-500">INTER/AVANZADO</p>
                <p className="text-white">19:00 HRS</p>
              </div>
            </div>
            <div className="border-2 border-yellow-500 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-yellow-500 text-xl">BALLROOM</h4>
              </div>
              <div>
                <p className="text-white">20:00 HRS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold underline text-white">VIERNES</h3>
          <div className="space-y-4 h-full">
            <div className="border-2 border-pink-400 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-pink-400 text-xl">INICIACIÓN A LA DANZA</h4>
              </div>
              <div>
                <p className="text-pink-400">INTERMEDIO</p>
                <p className="text-white">16:00 HRS</p>
              </div>
            </div>
            <div className="border-2 border-pink-500 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-pink-500 text-xl">TIK TOK DANCE</h4>
              </div>
              <div>
                <p className="text-white">17:00 HRS</p>
                <p className="text-pink-500">(+6 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-cyan-400 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-cyan-400 text-xl">DANCE KIDS</h4>
              </div>
              <div>
                <p className="text-cyan-400">NIVEL II</p>
                <p className="text-white">18:00 HRS</p>
              </div>
            </div>
            <div className="border-2 border-red-500 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-red-500 text-xl">CHAIR DANCE</h4>
              </div>
              <div>
                <p className="text-white">19:00 HRS</p>
                <p className="text-red-500">(JUVENIL/ADULTO)</p>
              </div>
            </div>
            <div className="border-2 border-purple-500 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-purple-500 text-xl">BROADWAY SHOW</h4>
              </div>
              <div>
                <p className="text-white">20:00 HRS</p>
                <p className="text-purple-500">(JUVENIL/ADULTO)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold underline text-white">SÁBADO</h3>
          <div className="space-y-4 h-full">
            <div className="border-2 border-blue-400 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-blue-400 text-xl">BALLET</h4>
              </div>
              <div>
                <p className="text-blue-400">JUVENIL/ADULTO</p>
                <p className="text-white">9:00 HRS</p>
              </div>
            </div>
            <div className="border-2 border-purple-400 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-purple-400 text-xl">INICIACIÓN A LA DANZA</h4>
              </div>
              <div>
                <p className="text-purple-400">INICIAL</p>
                <p className="text-white">10:00 HRS</p>
              </div>
              <div>
                <p className="text-purple-400">(+6 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-cyan-400 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-cyan-400 text-xl">DANCE KIDS</h4>
              </div>
              <div>
                <p className="text-cyan-400">NIVEL I</p>
                <p className="text-white">11:00 HRS</p>
              </div>
              <div>
                <p className="text-cyan-400">(+6 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-green-500 p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-green-500 text-xl">FULL DANCE</h4>
              </div>
              <div>
                <p className="text-white">12:00 HRS</p>
                <p className="text-green-500">(+6 AÑOS)</p>
              </div>
            </div>
            <div className="border-2 border-white p-4 rounded-lg schedule-card min-h-[140px] flex flex-col justify-between">
              <div>
                <h4 className="text-white text-xl">LYRICAL</h4>
              </div>
              <div>
                <p className="text-white">13:00 HRS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg text-pink-400">Inicio de clases: Marzo 2024</p>
        <p className="text-sm text-gray-400 mt-2">* Los horarios pueden estar sujetos a cambios</p>
      </div>
    </div>
  );
};

export default Schedule; 
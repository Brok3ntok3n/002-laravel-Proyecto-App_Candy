import VendedorCard from "../components/VendedorCard"

const vendedoresEjemplo = [
  {id:1, nombre: 'Carlos Pérez', activo:true, horaInicio: '08:15 AM'},
  {id:2, nombre: 'Ana Gómez', activo:false, horaInicio: null},
  {id:2, nombre: 'Ana Gómez', activo:false, horaInicio: '09:02 AM'},
]


function App(){
return (

    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Venta Express - Dashboard</h1>
      <h2>Vendedores</h2>
      {vendedoresEjemplo.map((v)=> (
        <VendedorCard
        key={v.id}
        nombre={v.nombre}
        activo={v.activo}
        horaInicio={v.horaInicio}
        />
      ))}
    </div>
  )
}

export default App
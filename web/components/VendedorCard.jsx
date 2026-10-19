function VendedorCard({nombre, activo, horaInicio}) {
    return (
        <div style={{ 
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '8px',
            backgroundColor: activo ? '#e6ffed' : '#f5f5f5'
         }}>
            <h3>{nombre}</h3>
            <p>Estado: {activo ? 'En Jornada' : 'Inactivo'}</p>
            {activo && <p>Inicio: {horaInicio}</p>}
        </div>
    )
}

export default VendedorCard
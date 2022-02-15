import React from 'react'

export default () => (<div style={{display: 'flex', justifyContent: 'center', margin: '.5rem'}}>
    <div className="lds-dual-ring" />
</div>
)

// import Loader from './Loader'

// const [loading, setLoading] = React.setState(true) ---> будет показываться в процессе загрузки

// {loading && <Loader />} 

// loading ? null : выводимый элемент  ---> если загрузка лоадинг а если нет то выводит элемент

// setLoading(false) ---> после загрузки пропадает
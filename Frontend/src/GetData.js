import React from 'react'

const GetData = ({ load, message }) => {
  return (
    <section className="mt-4 text-center">
      <p style={{ fontSize: 30, fontWeight: 'bold' }}>Random Jokes</p>
      <div className="display-server-message">
        {
          !load ?
            message ? <b>{message}</b> : '- Hit The button to get some random jokes'
            : 'Loading...'
        }
      </div>
    </section>
  )
}

export default GetData;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('react-root'))

export const styles = {
  title: 'text-2xl lg:text-3xl md:text-4xl font-bold text-[#478942] border-b-2 border-[#478942]/60 inline-block pb-2',
  titleDesc: 'mt-6 text-gray-700 text-lg lg:text-base leading-relaxed text-left',
  activity: {
    image: 'h-64 w-full md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[35rem]',
    container: 'flex lg:flex-row flex-col max-w-6xl mx-auto my-5',
    imageContainer: 'h-64 w-full md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[35rem] mx-auto my-5'
  },
  section: {
    container: 'w-full py-10 px-4 lg:px-8 lg:w-10/12 w-11/12 py-4 my-4 mx-auto shadow-lg rounded-lg place-self-center',
    title: 'text-4xl lg:text-5xl md:text-6xl font-bold text-[#478942] bg-clip-text text-center transition-transform duration-300 hover:scale-110',
    header: 'w-full py-10 px-4 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8'
  },
  checkAvailability: {
    button: 'inline-block border-2 border-[#478942] mt-6 lg:mt-4 md:mt-2 bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors',
    modal: {
      container: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
      content: 'bg-white p-6 rounded shadow-lg w-full max-w-6xl h-3/4 overflow-hidden relative',
      closeButton: 'absolute top-2 right-2 text-red-500 hover:text-red-700'
    }
  },
  houseSection: {
    bookingSection: 'w-full h-[420px] lg:w-1/2 lg:h-[420px] md:w-[65vw] md:h-[300px] mx-auto bg-white shadow-md p-6 lg:p-4 md:p-2',
    bookingButton: 'inline-block mt-6 lg:mt-4 md:mt-2 bg-[#478942] text-white px-6 py-2 rounded-lg hover:bg-[#386c35] transition-colors',
    mapSection: 'w-full h-[420px] lg:w-1/2 lg:h-[420px] md:w-[65vw] md:h-[300px] mx-auto rounded-lg overflow-hidden shadow-md'
  },
  slideShow: {
    carousel: 'w-full h-[40vh] md:h-[70vh] lg:w-full lg:h-[85vh] mx-auto'
  },
  stickyMenu: {
    span: 'self-center whitespace-nowrap text-xl font-semibold text-[#478942]',
    navbar: 'sticky top-0 z-50 bg-white shadow-md'
  }
}


root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

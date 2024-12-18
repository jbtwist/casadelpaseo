import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('react-root'))

export const styles = {
  title: 'text-2xl lg:text-3xl md:text-4xl font-bold text-[#478942] border-b-2 border-[#478942]/60 inline-block pb-2',
  titleDesc: 'my-6 text-gray-700 text-lg lg:text-base leading-relaxed text-left',
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
    button: 'inline-flex items-center justify-center border-2 border-[#478942] my-auto bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors h-fit',
    modal: {
      container: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
      content: 'bg-white p-6 rounded shadow-lg w-full max-w-6xl h-3/4 overflow-hidden relative',
      closeButton: 'absolute top-2 right-2 text-red-500 hover:text-red-700'
    }
  },
  houseSection: {
    bookingSection: 'w-full h-[420px] lg:w-1/2 lg:h-[420px] md:w-[65vw] md:h-[300px] mx-auto bg-white shadow-md p-6 lg:p-4 md:p-2',
    bookingButton: 'inline-block mt-6 lg:mt-4 md:mt-2 bg-[#478942] text-white px-6 py-2 rounded-lg hover:bg-[#386c35] transition-colors',
    mapSection: 'w-full h-[300px] landscape:h-[250px] portrait:h-[300px] sm:landscape:h-[280px] sm:h-[300px] sm:portrait:h-[320px] md:h-[350px] md:landscape:h-[300px] md:w-[65vw] md:portrait:h-[380px] landscape:lg:w-1/2 landscape:lg:h-[420px]  mx-auto rounded-lg overflow-hidden shadow-md',
    slides: {
      text: 'text-xs landscape:text-sm sm:text-sm sm:landscape:text-base md:text-base md:landscape:text-lg lg:text-3xl lg:landscape:text-4xl font-medium sm:font-bold lg:font-extrabold',
      slide1: `top-[5%] left-[5%] translate-x-0 sm:top-[5%] sm:left-[5%] sm:translate-x-0 xl:top-[10%] xl:left-[5%] xl:translate-x-0
               absolute inset-0 w-max h-fit text-center text-white rounded-lg text-shadow-[2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]`,
      slide2: `top-[20%] left-[80%] max-w[150px] sm:max-w-[200px] lg:max-w-[300px] whitespace-normal -translate-x-1/2
               absolute inset-0 h-fit text-center text-white rounded-lg text-shadow-[2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]`,
      slide3: `top-[65%] left-1/2 -translate-x-1/2 max-w[150px] sm:max-w-[200px] lg:max-w-[300px] xl:max-w-[400px] 2xl:max-w-[500px] whitespace-normal -translate-x-1/2
               absolute inset-0 h-fit text-center text-white rounded-lg text-shadow-[2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]`,
      slide4: `top-[65%] left-1/2 -translate-x-1/2 max-w[100px] sm:max-w-[150px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] whitespace-normal -translate-x-1/2
               absolute inset-0 h-fit text-center text-white rounded-lg text-shadow-[2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]`
    }
  },
  slideShow: {
    carousel: 'aspect-[16/9] w-full portrait:h-[288px] landscape:h-[360px] portrait:sm:h-[432px] landscape:sm:h-[480px] portrait:md:h-[576px] landscape:md:h-[720px] portrait:lg:h-[720px] landscape:lg:h-[864px] xl:h-[864px] mx-auto'
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

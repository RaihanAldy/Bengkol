import * as React from "react";

function LabelInputPair({ id, label, value, placeholder, type = "text", onChange }) {
    return (
      <div className="flex flex-col whitespace-nowrap">
        <label htmlFor={id} className="font-bold text-stone-800">
          {label}
        </label>
        <input
          id={id}
          value={value}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          className="justify-center items-start px-6 py-5 mt-2 text-center bg-white border border-solid border-stone-300 rounded-[72px] text-stone-500 max-md:px-5"
        />
      </div>
    );
  }
  
  function DatePicker({ date, onDateChange }) {
    return (
      <LabelInputPair
        id="date"
        label="Date"
        value={date}
        type="date"
        placeholder="Enter date"
        onChange={onDateChange}
      />
    );
  }
  
  function TimePicker({ time, onTimeChange }) {
    return (
      <LabelInputPair
        id="time"
        label="Time"
        value={time}
        type="time"
        placeholder="Enter time"
        onChange={onTimeChange}
      />
    );
  }
  
  function ServiceSelector({ selectedService, onServiceChange }) {
    return (
      <LabelInputPair
        id="service"
        label="Choose Service"
        value={selectedService}
        placeholder="Select a service"
        onChange={onServiceChange}
      />
    );
  }
  
  function FormSection() {
    const [date, setDate] = React.useState('04/01/2021');
    const [time, setTime] = React.useState('06:30 PM');
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [selectedService, setSelectedService] = React.useState('Car');
  
    return (
      <form className="flex flex-col px-12 py-12 mt-1 w-full text-base leading-6 bg-white rounded-2xl border border-white border-solid shadow-2xl mix-blend-hard-light max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between text-stone-800 max-md:flex-wrap">
          <DatePicker date={date} onDateChange={(e) => setDate(e.target.value)} />
          <TimePicker time={time} onTimeChange={(e) => setTime(e.target.value)} />
        </div>
        <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
          <LabelInputPair
            id="name"
            label="Name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <LabelInputPair
            id="phone"
            label="Phone"
            value={phone}
            placeholder="x-xxx-xxx-xxxx"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mt-6 font-bold text-stone-800 max-md:max-w-full">Choose Service</div>
        <ServiceSelector
          selectedService={selectedService}
          onServiceChange={(e) => setSelectedService(e.target.value)}
        />
        <button
          type="submit"
          className="justify-center items-center px-8 py-5 mt-6 font-bold text-right text-white bg-pink-800 rounded-[118px] max-md:px-5 max-md:max-w-full"
        >
          Order Now
        </button>
      </form>
    );
  }

  function Header(){
    const images = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d6c05067fff89397c8213227513b4e5ef53f87227286d968951fc5e641b149b?apiKey=dbec9a02c4de403e84990e9b0265279a&", alt: "" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/229c85a5b70401e89ebc80bf40956f21ca38fad443e6428ff70d92ade281141a?apiKey=dbec9a02c4de403e84990e9b0265279a&", alt: "" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f59e412e09769b850945b3cccea6f2ca5f85e28dcc7eb0eaf06dfb6528ef90ce?apiKey=dbec9a02c4de403e84990e9b0265279a&", alt: "" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/38de0204d632321684bb0db59808ecb693058eb970c6ab98629a57981f9f1df2?apiKey=dbec9a02c4de403e84990e9b0265279a&", alt: "" },
      ];
    
    <div className="absolute top-[0px] left-[0px] w-[1600px] h-[129px] text-base text-neutral-02">
        <div className="absolute top-[0px] left-[0px] bg-darkslategray-100 w-[1600px] h-[45px] overflow-hidden">
          <div className="absolute top-[9px] left-[1325px] flex flex-row items-start justify-start gap-[4px]">
          <section className="flex gap-1">
            {images.map((image, index) => (
              <ImageComponent key={index} src={image.src} alt={image.alt} className={image.className} />
            ))}
          </section>
          </div>
          <div className="absolute top-[11px] left-[150px] flex flex-row items-start justify-start gap-[25px]">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <section>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6770498127b75ec7dd88815be958ee4d3ab6257671b25de866046120a9fb33a2?apiKey=dbec9a02c4de403e84990e9b0265279a&" 
                alt="Telp" className="w-full border-2 stroke-[1.5px] " /> 
              </section>
              <div className="relative leading-[24px]">123-456-7890</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[8px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/35b673493bdc71c76c56a6c139baba85bc43787ebcd34502b1fd2bd772324ee6?apiKey=dbec9a02c4de403e84990e9b0265279a&"
              className="w-full border-2 stroke-[1.5px]"
              alt="Email"
            />
              <div className="relative leading-[24px]">
                Otto.corps12@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[74px] left-[151.5px] w-[1293px] h-[55px] text-darkslategray-100">
          <div className="absolute top-[0px] left-[0px] w-[211.2px] h-[55px] text-[42.7px] font-puritan">
            <img
              className="absolute top-[0px] left-[0px] w-14 h-[55px] overflow-hidden object-cover"
              alt=""
              src={require('.//img/logo.png')}
            />
            <div className="absolute top-[8px] left-[28.5px] w-[182.7px] h-[38.7px]">
              <i className="absolute top-[10.34%] left-[22.61%] tracking-[-0.4px] leading-[29.33px] font-bold">
                Bengkel Online
              </i>
              <img
                className="absolute h-[97.67%] w-[20.69%] top-[0%] right-[79.31%] bottom-[2.33%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
                alt=""
                src="/hotfood-1@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[11px] left-[554.9px] w-[433px] h-[32.5px] text-neutral-07">
            <div className="absolute top-[0.5px] left-[0px] rounded-15xl bg-neutral-03 flex flex-row items-center justify-center py-1 px-4">
              <div className="relative leading-[24px] font-medium">Home</div>
            </div>
            <div className="absolute top-[0.5px] left-[85px] rounded-15xl flex flex-row items-center justify-center py-1 px-4">
              <div className="relative leading-[24px] font-medium">About</div>
            </div>
            <div className="absolute top-[0px] left-[171.6px] rounded-15xl flex flex-row items-center justify-center py-1 px-4">
              <div className="relative leading-[24px] font-medium">Menu</div>
            </div>
            <div className="absolute top-[0px] left-[254.6px] rounded-15xl w-[84px] flex flex-row items-center justify-center py-1 px-4 box-border">
              <div className="relative leading-[24px] font-medium">
                Services
              </div>
            </div>
            <div className="absolute top-[0.5px] left-[339px] rounded-15xl flex flex-row items-center justify-center py-1 px-4">
              <div className="relative leading-[24px] font-medium">Contact</div>
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_24px)] left-[calc(50%_+_505.5px)] w-[135px] h-12 text-right text-neutral-071">
            <div className="absolute top-[calc(50%_-_24px)] left-[calc(50%_-_67.5px)] rounded-99xl flex flex-row items-center justify-center py-3 px-6 gap-[10px] border-[1.5px] border-solid border-neutral-07">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconoutlinecheckcircle1.svg"
              />
              <b className="relative leading-[24px] whitespace-pre-wrap">
                Order Now
              </b>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconoutlinearrowright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
  }

  function ImageComponent({ src, alt }) {
    return <img loading="lazy" src={src} alt={alt} className="shrink-0 aspect-square w-[35px]" />;
  }
  
  function MyComponent() {
    return (
      <section className="flex flex-col px-5 max-w-[812px]">
        <Header>
        </Header> 
        <header className="self-end mr-8 text-8xl font-medium text-center leading-[96px] text-stone-800 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Where’s your <br /> location?
        </header>
        <p className="self-center mt-6 ml-9 text-lg leading-7 text-center text-gray-600 max-md:max-w-full">
          We provide all the components you need for your vehicle.
        </p>
        <FormSection />
      </section>
    );
  }
  
  export default MyComponent;
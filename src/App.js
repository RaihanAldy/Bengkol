
import './App.css';
import Book from './Book.js';
import * as React from "react";
import { BrowserRouter as Router,Routes,Route, Link,} from "react-router-dom";
import PropTypes from "prop-types";

const App = ({ className = "" }) => {

  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d6c05067fff89397c8213227513b4e5ef53f87227286d968951fc5e641b149b?apiKey=dbec9a02c4de403e84990e9b0265279a&", alt: "" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/229c85a5b70401e89ebc80bf40956f21ca38fad443e6428ff70d92ade281141a?apiKey=dbec9a02c4de403e84990e9b0265279a&", alt: "" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f59e412e09769b850945b3cccea6f2ca5f85e28dcc7eb0eaf06dfb6528ef90ce?apiKey=dbec9a02c4de403e84990e9b0265279a&", alt: "" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/38de0204d632321684bb0db59808ecb693058eb970c6ab98629a57981f9f1df2?apiKey=dbec9a02c4de403e84990e9b0265279a&", alt: "" },
  ];

  return (
    
      <div className={`w-[1600px] bg-neutral-01 max-w-full h-[6912px] overflow-hidden text-left text-5xl text-neutral-07 font-body-16px-bold ${className}`}>
      <div className="absolute top-[6137px] left-[0px] w-[1600px] h-[778px] text-base text-neutral-04">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-darkslategray-100" />
        <div className="absolute h-[73.65%] top-[15.42%] bottom-[10.93%] left-[calc(50%_-_648px)] w-[1296px]">
          <div className="absolute h-[9.42%] top-[90.58%] bottom-[0%] left-[calc(50%_-_648px)] w-[1296px]">
            <div className="absolute top-[55.56%] left-[calc(50%_-_212px)] leading-[24px]">
              Copyright © 2024 Hashtag Developer. All Rights Reserved
            </div>
            <div className="absolute h-[1.85%] w-[100.08%] top-[0%] right-[-0.08%] bottom-[98.15%] left-[0%] box-border border-t-[1px] border-solid border-neutral-061" />
          </div>
          <div className="absolute h-[73.12%] w-full top-[0%] right-[0%] bottom-[26.88%] left-[0%] flex flex-row items-start justify-start gap-[135px] text-neutral-01">
            <div className="flex flex-col items-start justify-start gap-[30px] text-[32.7px] font-puritan">
              <div className="w-[211.2px] relative h-[55px]">
                <img
                  className="absolute top-[0px] left-[0px] w-14 h-[55px] overflow-hidden object-cover"
                  alt=""
                  src={require('.//img/logo.png')}/>
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
              <div className="w-[293px] relative text-base leading-[24px] font-body-16px-bold text-neutral-04 inline-block">
                In the new era of technology we look a in the future with
                certainty and pride to for our company and.
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px]">
                <section className="flex gap-3">
      {images.map((image, index) => (
        <ImageComponent key={index} src={image.src} alt={image.alt} />
      ))}
    </section>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[120px]">
              <div className="flex flex-col items-start justify-start gap-[40px]">
                <b className="relative leading-[24px]">Pages</b>
                <div className="flex flex-col items-start justify-start gap-[20px] text-neutral-03">
                  <div className="relative leading-[24px]">Home</div>
                  <div className="relative leading-[24px]">About</div>
                  <div className="relative leading-[24px]">Menu</div>
                  <div className="relative leading-[24px]">Pricing</div>
                  <div className="relative leading-[24px]">Blog</div>
                  <div className="relative leading-[24px]">Contact</div>
                  <div className="relative leading-[24px]">Delivery</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[40px]">
                <b className="relative leading-[24px]">Utility Pages</b>
                <div className="flex flex-col items-start justify-start gap-[20px] text-neutral-03">
                  <div className="relative leading-[24px]">Start Here</div>
                  <div className="relative leading-[24px]">Styleguide</div>
                  <div className="w-[149px] relative leading-[24px] inline-block">
                    Password Protected
                  </div>
                  <div className="relative leading-[24px]">404 Not Found</div>
                  <div className="relative leading-[24px]">Licenses</div>
                  <div className="relative leading-[24px]">Changelog</div>
                  <div className="relative leading-[24px]">View More</div>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-10 relative flex-[0_0_auto]">
              <b className="relative w-fit mt-[-1.00px] font-body-16px-bold font-[number:var(--body-16px-bold-font-weight)] text-neutral-01 text-[length:var(--body-16px-bold-font-size)] tracking-[var(--body-16px-bold-letter-spacing)] leading-[var(--body-16px-bold-line-height)] whitespace-nowrap [font-style:var(--body-16px-bold-font-style)]">
                Our Brand</b>
                <div className="relative w-[403px] h-[355px]">
                    <img className="top-0 left-0 absolute w-[194px] h-[170px]" 
                      alt="" src={require('.//img/pertamina.png')} />
                    <img className="top-0 left-[209px] absolute w-[194px] h-[170px]" 
                      alt="" src={require('.//img/gtr.png')} />
                    <img className="top-[185px] left-0 absolute w-[194px] h-[170px]" 
                      alt="" src={require('.//img/ahm.png')} />
                    <img className="top-[185px] left-[209px] absolute w-[194px] h-[170px]"
                      alt=""
                      src={require('.//img/shell.png')}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[5020px] left-[0px] w-[1600px] h-[1117px] text-36xl">
        <div className="absolute top-[0px] left-[0px] w-[1600px] h-[1117px]">
          <div className="absolute top-[0px] left-[0px] bg-neutral-02 w-[1600px] h-[1117px]" />
        </div>
        <div className="absolute top-[120px] left-[152px] flex flex-col items-start justify-start gap-[64px]">
          <div className="w-[1296px] flex flex-row items-center justify-between">
            <div className="relative leading-[60.5px] font-medium">
              Berita Seputar Otomotif
            </div>
            <div className="rounded-99xl bg-brown flex flex-row items-center justify-center py-5 px-8 gap-[10px] text-right text-base text-neutral-01">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconoutlinecheckcircle.svg"
              />
              <b className="relative leading-[24px]">Read All Articles</b>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconoutlinearrowright.svg"
              />
            </div>
          </div>
          <div className="w-[1296px] relative h-[732px] text-sm text-neutral-05">
            <div className="absolute top-[0px] left-[0px] w-[636px] h-[732px] text-base">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_3px_59.57px_rgba(0,_0,_0,_0.08)] rounded-xl bg-neutral-01 box-border w-[636px] h-[732px] border-[1px] border-solid border-neutral-02" />
              <div className="absolute top-[0px] left-[0px] w-[636px] h-[677px]">
                <div className="absolute top-[501px] left-[35px] flex flex-col items-start justify-start gap-[15px]">
                  <div className="relative leading-[24px] font-medium">
                    January 3, 2023
                  </div>
                  <div className="w-[568px] relative text-xl leading-[26px] font-medium text-neutral-07 inline-block">
                    Akibat mengisi oli mesin terlalu banyak
                  </div>
                  <div className="w-[554px] relative leading-[24px] text-neutral-061 inline-block">
                    Oli mesin merupakan fluida yang memiliki peran penting
                    terhadap performa mesin pada kendaraan Anda. Seringkali
                    pemilik kendaraan bermotor mengabaikan penggantian oli mesin
                    dan akibatnya performa mesin menjadi buruk.
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[636px] h-[456px] object-cover"
                  alt=""
                  src={require('.//img/a.png')}
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[660px] w-[306px] h-[354px]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_3px_59.57px_rgba(0,_0,_0,_0.08)] rounded-xl bg-neutral-01 box-border w-[306px] h-[354px] border-[1px] border-solid border-neutral-02" />
              <div className="absolute top-[0px] left-[0px] w-[306px] h-[340px]">
                <div className="absolute top-[230px] left-[25px] flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative leading-[20px] font-medium">
                    January 3, 2023
                  </div>
                  <div className="w-64 relative text-xl leading-[26px] font-medium text-neutral-07 inline-block">
                    Dampak pada mensin kendaraan apabila bensin tercampur air
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[306px] h-[200px] object-cover"
                  alt=""
                  src={require('.//img/b.png')}
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[990px] w-[306px] h-[354px]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_3px_59.57px_rgba(0,_0,_0,_0.08)] rounded-xl bg-neutral-01 box-border w-[306px] h-[354px] border-[1px] border-solid border-neutral-02" />
              <div className="absolute top-[0px] left-[0px] w-[306px] h-[314px]">
                <div className="absolute top-[230px] left-[25px] flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative leading-[20px] font-medium">
                    January 3, 2023
                  </div>
                  <div className="w-64 relative text-xl leading-[26px] font-medium text-neutral-07 inline-block">
                    Keunggulan mobil Hybrid dibandingkan mobil listrik
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[306px] h-[200px] object-cover"
                  alt=""
                  src={require('.//img/c.png')}
                />
              </div>
            </div>
            <div className="absolute top-[378px] left-[660px] w-[306px] h-[354px]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_3px_59.57px_rgba(0,_0,_0,_0.08)] rounded-xl bg-neutral-01 box-border w-[306px] h-[354px] border-[1px] border-solid border-neutral-02" />
              <div className="absolute top-[0px] left-[0px] w-[306px] h-[314px]">
                <div className="absolute top-[230px] left-[25px] flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative leading-[20px] font-medium">
                    January 3, 2023
                  </div>
                  <div className="w-64 relative text-xl leading-[26px] font-medium text-neutral-07 inline-block">
                    Aki baru apakah perlu di charge ulang?
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[306px] h-[200px] object-cover"
                  alt=""
                  src={require('.//img/d.png')}
                />
              </div>
            </div>
            <div className="absolute top-[378px] left-[990px] w-[306px] h-[354px]">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_3px_59.57px_rgba(0,_0,_0,_0.08)] rounded-xl bg-neutral-01 box-border w-[306px] h-[354px] border-[1px] border-solid border-neutral-02" />
              <div className="absolute top-[0px] left-[0px] w-[306px] h-[314px]">
                <div className="absolute top-[230px] left-[25px] flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative leading-[20px] font-medium">
                    January 3, 2023
                  </div>
                  <div className="w-[253px] relative text-xl leading-[26px] font-medium text-neutral-07 inline-block">
                    Kenapa Balancing ban mobil diperlukan?
                  </div>
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[306px] h-[200px] object-cover"
                  alt=""
                  src={require('.//img/e.png')} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[4254px] left-[0px] w-[1600px] h-[766px] text-center text-36xl">
        <div className="absolute top-[0px] left-[0px] bg-neutral-01 w-[1600px] h-[766px]" />
        <div className="absolute top-[98px] left-[152px] flex flex-col items-center justify-start gap-[64px]">
          <div className="flex flex-col items-center justify-start gap-[20px]">
            <div className="relative leading-[60.5px] font-medium">
              What Our Customers Say
            </div>
            <div className="w-[476px] relative text-base leading-[24px] text-neutral-06 hidden">
              We consider all the drivers of change gives you the components you
              need to change to create a truly happens.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px] text-left text-5xl text-brown">
            <div className="w-[416px] relative h-[408px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-neutral-02 w-[416px] h-[408px]" />
              <div className="absolute top-[45px] left-[35px] flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <b className="relative tracking-[-0.03em] leading-[30px]">
                    “Layanan Profesional”
                  </b>
                  <div className="w-[346px] relative text-lg leading-[28px] text-neutral-061 inline-block">
                     Pelayanan Bengkol itu sangat profesional dan memuaskan.
                    Mekanik langsung dari bengkel resmi dan kita dapat
                    konsultasi dengan gratis
                  </div>
                </div>
                <div className="w-[347px] relative box-border h-px opacity-[0.7] border-t-[1px] border-solid border-neutral-03" />
                <div className="flex flex-row items-center justify-start gap-[20px] text-base text-neutral-07">
                  <img
                    className="w-[70px] relative rounded-[50%] h-[70px] object-cover"
                    alt=""
                    src={require('.//img/sophire.png')}
                  />
                  <div className="flex flex-col items-start justify-start gap-[3px]">
                    <b className="relative leading-[24px]">Sophire Robson</b>
                    <div className="relative leading-[24px] text-neutral-061">
                      Los Angeles, CA
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[416px] relative h-[408px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-neutral-02 w-[416px] h-[408px]" />
              <div className="absolute top-[45px] left-[35px] h-[291px] flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <b className="relative tracking-[-0.03em] leading-[30px]">
                    “Mudah dan Simple”
                  </b>
                  <div className="w-[346px] relative text-lg leading-[28px] text-neutral-061 inline-block">
                    Bengkol memberikan kemudahan, dalam melakukan servis. tak
                    perlu pergi ke bengkel mekanik bisa datang ke rumah
                  </div>
                </div>
                <div className="w-[347px] relative box-border h-px opacity-[0.7] border-t-[1px] border-solid border-neutral-03" />
                <div className="flex flex-row items-center justify-start gap-[20px] text-base text-neutral-07">
                  <img
                    className="w-[70px] relative rounded-[50%] h-[70px] object-cover"
                    alt=""
                    src={require('.//img/matt.png')}
                  />
                  <div className="flex flex-col items-start justify-start gap-[3px]">
                    <b className="relative leading-[24px]">Matt Cannon</b>
                    <div className="relative leading-[24px] text-neutral-061">
                      San Diego, CA
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[416px] relative h-[408px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-neutral-02 w-[416px] h-[408px]" />
              <div className="absolute top-[45px] left-[35px] flex flex-col items-start justify-start gap-[32px]">
                <div className="flex flex-col items-start justify-start gap-[24px]">
                  <b className="relative tracking-[-0.03em] leading-[30px]">
                    “Anti Repot”
                  </b>
                  <div className="w-[346px] relative text-lg leading-[28px] text-neutral-061 inline-block">
                    Tak perlu repot dan tak perlu antri Bengkol memberikan
                    kemudahan. servis kendaraandan harga terjangkau.
                  </div>
                </div>
                <div className="w-[347px] relative box-border h-px opacity-[0.7] border-t-[1px] border-solid border-neutral-03" />
                <div className="flex flex-row items-center justify-start gap-[20px] text-base text-neutral-07">
                  <img
                    className="w-[70px] relative rounded-[50%] h-[70px] object-cover"
                    alt=""
                    src={require('.//img/andy.png')}
                  />
                  <div className="flex flex-col items-start justify-start gap-[3px]">
                    <b className="relative leading-[24px]">Andy Smith</b>
                    <div className="relative leading-[24px] text-neutral-061">
                      San Francisco, CA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3387px] left-[0px] w-[1600px] h-[867px] text-[50px]">
        <div className="absolute top-[0px] left-[0px] w-[1600px] h-[867px]">
          <div className="absolute top-[0px] left-[0px] bg-neutral-02 w-[1600px] h-[867px]" />
        </div>
        <div className="absolute top-[120px] left-[152px] w-[1296px] h-[627px]">
          <div className="absolute top-[0px] left-[0px] w-[1261px] h-[627px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[431px] h-[600px] object-cover"
              alt=""
              src={require('.//img/bengkel1.png')}
            />
            <img
              className="absolute top-[30px] left-[455px] rounded-xl w-[290px] h-[333px] object-cover"
              alt=""
              src={require('.//img/bengkel2.png')}
            />
            <img
              className="absolute top-[387px] left-[455px] rounded-xl w-[290px] h-60 object-cover"
              alt=""
              src={require('.//img/bengkel3.png')}
            />
            <img
              className="absolute top-[229px] left-[835px] rounded-xl w-[115px] h-[85px] object-cover"
              alt=""
              src={require('.//img/dana.jpeg')}
            />
            <img
              className="absolute top-[320px] left-[990px] rounded-xl w-[115px] h-[85px] object-cover"
              alt=""
              src={require('.//img/qris.png')}
            />
            <img
              className="absolute top-[422px] left-[990px] rounded-xl w-[115px] h-[85px] object-cover"
              alt=""
              src={require('.//img/ovo.jpeg')}
            />
            <img
              className="absolute top-[422px] left-[835px] rounded-xl w-[115px] h-[85px] object-cover"
              alt=""
              src={require('.//img/bri.png')}
            />
            <img
              className="absolute top-[320px] left-[835px] rounded-xl w-[115px] h-[85px] object-cover"
              alt=""
              src={require('.//img/bsi.png')}
            />
            <img
              className="absolute top-[422px] left-[1146px] rounded-xl w-[115px] h-[85px] object-cover"
              alt=""
              src={require('.//img/mandiri.png')}
            />
            <img
              className="absolute top-[320px] left-[1146px] rounded-xl w-[115px] h-[85px] object-cover"
              alt=""
              src={require('.//img/spay.png')}
            />
            <img
              className="absolute top-[229px] left-[990px] rounded-xl w-[115px] h-[85px] object-cover"
              alt=""
              src={require('.//img/bca.png')}
            />
            <img
              className="absolute top-[229px] left-[1146px] rounded-xl w-[115px] h-[85px] object-cover"
              alt=""
              src={require('.//img/va.png')}
            />
          </div>
          <div className="absolute top-[15px] left-[835px] flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="w-[461px] relative leading-[60.5px] font-medium inline-block">{`Support dengan berbagai metode pembayaran `}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2519px] left-[0px] w-[1600px] h-[868px] text-center">
        <div className="absolute top-[0px] left-[0px] bg-neutral-01 w-[1600px] h-[868px]" />
        <div className="absolute top-[120px] left-[152px] w-[1296px] h-[565px]">
          <div className="absolute top-[185px] left-[0px] flex flex-row items-start justify-start gap-[24px]">
            <div className="w-[306px] relative h-[380px]">
              <div className="absolute top-[350px] left-[95px] flex flex-col items-start justify-start">
                <b className="relative tracking-[-0.03em] leading-[30px]">{`Ban & Velg`}</b>
              </div>
              <img
                className="absolute top-[0px] left-[0px] rounded-xl w-[306px] h-80 object-cover"
                alt=""
                src={require('.//img/1.png')}  
              />
            </div>
            <div className="w-[306px] relative h-[380px]">
              <div className="absolute top-[350px] left-[135px] flex flex-col items-start justify-start">
                <b className="relative tracking-[-0.03em] leading-[30px]">
                  Aki
                </b>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[306px] h-80 object-cover"
                alt=""
                src={require('.//img/2.png')}  
              />
            </div>
            <div className="w-[306px] relative h-[380px]">
              <div className="absolute top-[350px] left-[138px] flex flex-col items-start justify-start">
                <b className="relative tracking-[-0.03em] leading-[30px]">
                  Oli
                </b>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[306px] h-80 object-cover"
                alt=""
                src={require('.//img/3.png')}  
              />
            </div>
            <div className="w-[306px] relative h-[380px]">
              <div className="absolute top-[350px] left-[9px] flex flex-col items-start justify-start">
                <b className="relative tracking-[-0.03em] leading-[30px]">
                  Servis, Grooming dan Cuci
                </b>
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-[306px] h-80 object-cover"
                alt=""
                src={require('.//img/4.png')}  
              />
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[693px] h-[140px]" />
        </div>
        <div className="absolute top-[120px] left-[99px] text-36xl leading-[60.5px] font-medium text-left inline-block w-[1037px] h-[89px]">
          Pilih sesuai dengan keinginan anda
        </div>
      </div>
      <div className="absolute top-[1663px] left-[0px] w-[1600px] h-[856px] text-neutral-01">
        <div className="absolute top-[0px] left-[0px] bg-neutral-02 w-[1600px] h-[856px]" />
        <div className="absolute top-[120px] left-[152px] flex flex-row items-center justify-start gap-[90px]">
          <div className="w-[649px] relative h-[616px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[599px] h-[566px] overflow-hidden object-cover"
              alt=""
              src={require('.//img/image 111.png')}  
            />
            <div className="absolute top-[295px] left-[238px] w-[411px] h-[321px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-darkslategray-100 w-[411px] h-[321px]" />
              <div className="absolute top-[50px] left-[50px] bg-darkslategray-100 flex flex-col items-start justify-start gap-[45px]">
                <b className="relative tracking-[-0.03em] leading-[30px]">
                  Come and visit us
                </b>
                <div className="flex flex-col items-start justify-start gap-[25px] text-base text-neutral-02">
                  <div className="flex flex-row items-start justify-start gap-[20px]">
                    <section>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6770498127b75ec7dd88815be958ee4d3ab6257671b25de866046120a9fb33a2?apiKey=dbec9a02c4de403e84990e9b0265279a&" 
                      alt="Telp" className="w-full border-2 stroke-[1.5px] " /> 
                    </section>
                    <div className="relative leading-[24px]">123-456-7890</div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[20px]">
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
                  <div className="flex flex-row items-start justify-start gap-[20px]">
                  <img 
                    loading="lazy" 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6b75464219d980ece97510391913cce482468629bc4c514437173b85fb9e9c4?apiKey=dbec9a02c4de403e84990e9b0265279a&" 
                    className="w-full border-2 stroke-[2.5px]" 
                    alt="Location" 
                  />
                    <div className="w-[267px] relative leading-[24px] inline-block shrink-0">
                      837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[40px] text-36xl text-neutral-07">
            <div className="flex flex-col items-start justify-start gap-[24px]">
              <div className="w-[557px] relative leading-[60.5px] font-medium inline-block">
                Apa itu Bengkel Online ??
              </div>
              <div className="w-[557px] relative text-lg leading-[28px] font-medium inline-block">
                Bengkol merupakan sebuah layanan bengkel yang mengubah cara
                pelanggan merawat kendaraan mereka. Dalam era di mana
                keterbatasan waktu dan mobilitas menjadi faktor utama, Bengkol
                menyediakan solusi yang praktis dan efisien bagi mereka yang
                mengutamakan kemudahan dalam perawatan kendaraan
              </div>
              <div className="w-[557px] relative text-base leading-[24px] text-neutral-061 inline-block">
                Bengkol menawarkan kemudahan akses yang belum pernah ada
                sebelumnya dengan menyediakan layanan perawatan kendaraan yang
                datang langsung ke lokasi pelanggan, baik itu di rumah, tempat
                kerja, atau di mana pun yang diinginkan.
              </div>
            </div>
            <div className="rounded-99xl flex flex-row items-center justify-center py-5 px-8 gap-[10px] text-right text-base text-neutral-071 border-[1.5px] border-solid border-neutral-07">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconoutlinecheckcircle1.svg"
              />
              <b className="relative leading-[24px]">More About Us</b>
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                alt=""
                src="/iconoutlinearrowright1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[951px] left-[0px] w-[1600px] h-[712px] text-center">
        <div className="absolute top-[0px] left-[0px] bg-neutral-01 w-[1600px] h-[712px]" />
        <div className="absolute top-[92px] left-[152px] w-[1296px] h-[500px]">
          <div className="absolute top-[125px] left-[0px] flex flex-row items-start justify-start gap-[24px]">
            <div className="w-[306px] relative h-[375px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-neutral-01 box-border w-[306px] h-[375px] border-[1.5px] border-solid border-neutral-03" />
              <div className="absolute top-[40px] left-[34px] flex flex-col items-center justify-center gap-[30px]">
              <div className="flex justify-center items-center px-6 bg-lightgray-800 rounded-full h-[100px] w-[100px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b58cbab3d5381a55709a5f79eb3744cfa3df534c0bf362e2234d580bd1026ca2?apiKey=dbec9a02c4de403e84990e9b0265279a&"
                  alt=""
                  className="w-full aspect-[1.06] fill-zinc-700"
                />
              </div>
                <div className="flex flex-col items-center justify-start gap-[15px]">
                  <b className="relative tracking-[-0.03em] leading-[30px]">
                    Services
                  </b>
                  <div className="w-[238px] relative text-base leading-[24px] text-neutral-061 inline-block">{`Layanan 24 jam nonstop yang cepat, praktis , dan profesional. hadir untuk anda dimanapun dan kapanpun. `}</div>
                </div>
                <div className="w-[111px] rounded-xl h-[26px] flex flex-row items-center justify-center gap-[10px] text-base text-brown">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/iconoutlinecheck.svg"
                  />
                  <b className="relative leading-[24px]">Explore Menu</b>
                  <img
                    className="w-[22.6px] relative h-[22.6px] overflow-hidden shrink-0 object-contain hidden"
                    alt=""
                    src="/iconsolidcheveronright@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[306px] relative h-[375px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-neutral-01 box-border w-[306px] h-[375px] border-[1.5px] border-solid border-neutral-03" />
              <div className="absolute top-[40px] left-[34px] flex flex-col items-center justify-center gap-[30px]">
              <div className="flex justify-center items-center px-6 bg-lightgray-800 rounded-full h-[100px] w-[100px]">
              <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7212561d9382bda84891d074e2145fbadd469a181e69b75b7b4edfc9d3c511f1?apiKey=dbec9a02c4de403e84990e9b0265279a&"
                  alt=""
                  className="w-full aspect-[1.04]"
                />
              </div>
                <div className="flex flex-col items-center justify-start gap-[15px]">
                  <b className="relative tracking-[-0.03em] leading-[30px]">
                    Spare Parts
                  </b>
                  <div className="w-[238px] relative text-base leading-[24px] text-neutral-061 inline-block">
                    Berbagai macam suku cadang yang ada dengan jaminan kuallitas
                    dan harganya
                  </div>
                </div>
                <div className="w-[111px] rounded-xl h-[26px] flex flex-row items-center justify-center gap-[10px] text-base text-brown">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/iconoutlinecheck.svg"
                  />
                  <b className="relative leading-[24px]">Explore Menu</b>
                  <img
                    className="w-[22.6px] relative h-[22.6px] overflow-hidden shrink-0 object-contain hidden"
                    alt=""
                    src="/iconsolidcheveronright@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[306px] relative h-[375px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-neutral-01 box-border w-[306px] h-[375px] border-[1.5px] border-solid border-neutral-03" />
              <div className="absolute top-[40px] left-[34px] flex flex-col items-center justify-center gap-[30px]">
              <div className="flex justify-center items-center px-6 rounded-full h-[100px] w-[100px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f665a5762597f50641da7a26590d6e38940271397c926ab96a403a64647feb5c?apiKey=dbec9a02c4de403e84990e9b0265279a&"
                  alt=""
                  className="w-full aspect-[1.92]"
                />
              </div>
                <div className="flex flex-col items-center justify-start gap-[15px]">
                  <b className="relative tracking-[-0.03em] leading-[30px]">
                    Vehicles
                  </b>
                  <div className="w-[238px] relative text-base leading-[24px] text-neutral-061 inline-block">
                    <p className="m-0">{` Berbagai macam piilihan `}</p>
                    <p className="m-0">
                      jenis kendaraan yang diinginkan oleh anda
                    </p>
                  </div>
                </div>
                <div className="w-[111px] rounded-xl h-[26px] flex flex-row items-center justify-center gap-[10px] text-base text-brown">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/iconoutlinecheck.svg"
                  />
                  <b className="relative leading-[24px]">Explore Menu</b>
                  <img
                    className="w-[22.6px] relative h-[22.6px] overflow-hidden shrink-0 object-contain hidden"
                    alt=""
                    src="/iconsolidcheveronright@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[306px] relative h-[375px]">
              <div className="absolute top-[0px] left-[0px] rounded-xl bg-neutral-01 box-border w-[306px] h-[375px] border-[1.5px] border-solid border-neutral-03" />
              <div className="absolute top-[40px] left-[34px] flex flex-col items-center justify-center gap-[30px]">
              <div className="flex justify-center items-center px-6 rounded-full h-[100px] w-[100px]">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3643a77eb47785f1b57d31858f1a756e4de6e89979aba8b99b2a6f09a8090ba5?apiKey=dbec9a02c4de403e84990e9b0265279a&"
                    className="w-full aspect-[1.52]"
                    alt=""
                />
              </div>
                <div className="flex flex-col items-center justify-start gap-[15px]">
                  <b className="relative tracking-[-0.03em] leading-[30px]">
                    Customs
                  </b>
                  <div className="w-[238px] relative text-base leading-[24px] text-neutral-061 inline-block">
                    Kebebasan untuk mengatur berbagai macam aksesoris pada
                    kendaraan pribadi anda.
                  </div>
                </div>
                <div className="w-[111px] rounded-xl h-[26px] flex flex-row items-center justify-center gap-[10px] text-base text-brown">
                  <img
                    className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/iconoutlinecheck.svg"
                  />
                  <b className="relative leading-[24px]">Explore Menu</b>
                  <img
                    className="w-[22.6px] relative h-[22.6px] overflow-hidden shrink-0 object-contain hidden"
                    alt=""
                    src="/iconsolidcheveronright@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[423px] flex flex-col items-center justify-start gap-[20px] text-36xl">
            <div className="relative leading-[60.5px] font-medium">
              Browse Our Menu
            </div>
            <div className="w-[476px] relative text-base leading-[24px] text-neutral-06 hidden">
              We consider all the drivers of change gives you the components you
              need to change to create a truly happens.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[166px] left-[0px] w-[1617px] h-[802px] text-center text-[100px] text-neutral-01 font-franklin-gothic-book">
        <div className="absolute top-[0px] left-[0px] w-[1617px] h-[802px]">
          <div className="absolute top-[0px] left-[0px] w-[1617px] h-[802px]">
            <img
              className="absolute top-[0px] left-[0px] w-[1617px] h-[802px] object-cover"
              alt=""
              src={require('.//img/image 118.png')}  
              />
            <div className="absolute top-[119px] left-[508px] flex flex-col items-center justify-start">
              <div className="h-[371px] flex flex-col items-center justify-start gap-[32px]">
                <div className="w-[1014px] relative leading-[96px] inline-block h-[272px] shrink-0">
                  "DRIVING SATISFACTION, ONE SERVICE AT A TIME."
                </div>
                <div className="w-[710px] relative text-5xl leading-[32px] font-body-16px-bold inline-block">
                  "Maintaining your vehicle isn't just about keeping it running,
                  it's about preserving the joy of the journey."
                </div>
              </div>
            </div>
            <div className="absolute top-[465px] left-[50px] rounded-[100px] bg-darkslategray-200 w-[556px] h-[78px] flex flex-row items-center justify-center py-[15px] px-[50px] box-border gap-[8px] text-left text-3xl font-bt-01">
            <div className="flex justify-center items-center px-2.5 bg-amber-500 rounded-full h-[49px] w-[49px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/01ca297085d15fa0d7e64bee11907f10accb7516c9dfbeb269a8ed57bbaa10a1?apiKey=dbec9a02c4de403e84990e9b0265279a&"
                className="w-full aspect-[1.03] fill-white"
                alt=""
              />
            </div>
              <div className="w-[341.8px] relative h-[63.3px]">
                <div className="absolute top-[-1px] left-[-1px] rounded-[120px] bg-neutral-01 box-border w-[343.8px] h-[65.3px] opacity-[0.3] border-[2px] border-solid border-dimgray" ></div>
              </div> 
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6684aabd6c74fa548d2a8d9d72ca547981f7c86d2b50e66c7913cbfe4b9b17aa?apiKey=dbec9a02c4de403e84990e9b0265279a&" 
                alt="" 
                className="w-full border-2 border-white border-solid aspect-square max-w-[20px] stroke-[2px] stroke-white" 
              /> 
            </div>
          </div>
        </div>
      </div>
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
    </div>

  );
};

function ImageComponent({ src, alt }) {
  return <img loading="lazy" src={src} alt={alt} className="shrink-0 aspect-square w-[35px]" />;
}

App.propTypes = {
  className: PropTypes.string,
};

export default App;

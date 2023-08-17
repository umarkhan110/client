import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Price = ({ massageTypeWithoutSlash }) => {
  const [selectedService, setSelectedService] = useState(null);
  
  useEffect(() => {
    const services = [
      {
        id: 1,
        title: "Deep Tissue",
        desc: "Deep tissue massage is a therapeutic technique that targets deep muscle layers and connective tissue. It uses firm pressure and specific strokes to relieve tension, improve circulation, and alleviate chronic pain. It's ideal for addressing muscle stiffness, injuries, and chronic pain conditions",
        imgsrc: "/assets/images/services/deep tissue.jpg",
        priceData:[
          {
              duration:"60min",
              price:"$100"
          },
          {
              duration:"90min",
              price:"$140"
          },
          {
              duration:"120min",
              price:"$199"
          }
        ]
      },
      {
        id: 2,
        title: "Swedish",
        desc: "Swedish Massage involves the use of gentle, flowing strokes and kneading motions to promote relaxation and reduce muscle tension. The therapist uses long, gliding strokes and circular motions to warm up the muscles, increase blood circulation, and release tension. Stretching and joint movements may also be incorporated to enhance flexibility.",
        imgsrc: "/assets/images/swedish-massage.png",
        priceData:[
          {
              duration:"60min",
              price:"$100"
          },
          {
              duration:"90min",
              price:"$140"
          },
          {
              duration:"120min",
              price:"$199"
          }
        ]
      },
      {
        id: 3,
        title: "Prenatal",
        desc: "Prenatal massage is a specialized form of massage for pregnant women. It addresses pregnancy-related discomforts, promotes relaxation, and improves circulation. It is safe and performed by trained therapists.",
        imgsrc: "/assets/images/services/prenatal.jpg",
        priceData:[
          {
              duration:"60min",
              price:"$150"
          },
          {
              duration:"90min",
              price:"$249"
          },
          {
              duration:"120min",
              price:"$300"
          }
        ]
      },
      {
        id: 4,
        title: "Sports",
        desc: "Sports massage is a specialized technique for athletes and active individuals. It improves performance, prevents injuries, and aids in recovery. It involves deep tissue massage, stretching, and targeted pressure.",
        imgsrc: "/assets/images/services/sports.jpg",
        priceData:[
          {
              duration:"60min",
              price:"$100"
          },
          {
              duration:"90min",
              price:"$140"
          },
          {
              duration:"120min",
              price:"$199"
          }
        ]
      },
      {
        id: 5,
        title: "Postpartum",
        desc: "Postpartum massage supports women after childbirth, addressing physical and emotional recovery. It reduces muscle soreness, tension, and fatigue. The sessions promote relaxation and aid in restoring the body's balance. It is a nurturing and supportive treatment for new mothers.",
        imgsrc: "/assets/images/services/post partum 2.jpg",
        priceData:[
          {
              duration:"60min",
              price:"$150"
          },
          {
              duration:"90min",
              price:"$249"
          },
          {
              duration:"120min",
              price:"$300"
          }
        ]
      },
      {
        id: 6,
        title: "Reflexology",
        desc: "Reflexology massage involves applying pressure to specific points on the feet, hands, or ears believed to correspond to different organs and systems in the body. It promotes relaxation, improves circulation, and stimulates the body's healing processes.",
        imgsrc: "/assets/images/services/reflexology.jpeg",
        priceData:[
          {
              duration:"60min",
              price:"$100"
          },
          {
              duration:"90min",
              price:"$140"
          },
          {
              duration:"120min",
              price:"$199"
          }
        ]
      },
      {
        id: 7,
        title: "Lymphatic",
        desc: "Regular lymphatic massage, also known as lymphatic drainage massage, stimulates the lymphatic system using gentle, rhythmic movements. It promotes detoxification, reduces swelling, and supports immune function. It is often used for lymphedema and post-surgical recovery.",
        imgsrc: "/assets/images/services/lymphatic.jpg",
        priceData:[
          {
              duration:"60min",
              price:"$150"
          },
          {
              duration:"90min",
              price:"$249"
          }
        ]
      },
      {
        id: 8,
        title: "Post-OP Lymphatic",
        desc: "Post-op lymphatic massage promotes healing and reduces swelling after surgery. It stimulates lymphatic circulation to eliminate excess fluid and aids in faster recovery.",
        imgsrc: "/assets/images/post-op.jpg",
        priceData:[
          {
              duration:"60min",
              price:"$150"
          },
          {
              duration:"90min",
              price:"$249"
          }
        ]
      },
    ];
    services.map((service) => {
      if (service.title === massageTypeWithoutSlash) {
        setSelectedService(service);
      }
      return null;
    });
  }, [massageTypeWithoutSlash]);

  return (
    <>
    <div class="wrapper">
      <div class="banner center-view">
        <div class="container">
          <div class="row py-5">
            <div class="col-sm-6 col-xs-12">
              <div class="content-view fadeInLeft main-hero-content">
                <h2>Price for {selectedService?.title}</h2>
                <p className="d-sm-block">{selectedService?.desc}</p>
                <a href="/book" class="com-btn-view">
                  Book Now
                </a>
              </div>
            </div>
            <div class="col-sm-6 col-xs-12 main-video-box">
              <img
                src={selectedService?.imgsrc}
                alt={selectedService?.title}
                width="640"
                height="480"
                class="hero-video"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="">
        <div class="container">
          <div class="row py-5">
          <div class="d-none d-sm-block col-sm-6 col-xs-12 main-video-box">
              <img
                src={selectedService?.imgsrc}
                alt={selectedService?.title}
                // width="640"
                // height="480"
                className="img-fluid rounded-4"
              ></img>
            </div>
            <div class="col-sm-6 col-xs-12 d-flex align-items-center">
              <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Massage Type</th>
                    <th>Duration</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedService?.priceData.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{selectedService.title}</td>
                        <td>{data.duration}</td>
                        <td>{data.price}</td>
                      </tr>
                    ))}
                  </tbody>
               </Table>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Price;

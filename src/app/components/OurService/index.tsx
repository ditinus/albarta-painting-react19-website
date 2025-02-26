import React from "react";
import { Button, Container } from "react-bootstrap";
import "./style.css";
import ServiceIamge from "../../../../public/assets/service-image.png";
import Image from "next/image";

const services = [
  {
    title: "Interior Painting Calgary",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!",
    buttonText: "Learn More",
  },
  {
    title: "Exterior Painting Calgary",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!",
    buttonText: "Learn More",
  },
  {
    title: "Exterior Painting Calgary",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!",
    buttonText: "Learn More",
  },
  {
    title: "Exterior Painting Calgary",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!",
    buttonText: "Learn More",
  },
  {
    title: "Exterior Painting Calgary",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!",
    buttonText: "Learn More",
  },
  {
    title: "Exterior Painting Calgary",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!",
    buttonText: "Learn More",
  },
];

const Index = () => {
  return (
    <Container >
    <section id="gallery">
      <div className="mt-5">
        <div className="row">
          {services?.map((service, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div className="card border-0">
                <p className="text-uppercase textH2">{service?.title}</p>
                <Image
                  src={ServiceIamge}
                  className="card-img-top rounded-0"
                  alt="Service Image"
                />
                <div className="card-body pt-3">
                  <h5 className="card-title text-black">
                    Quality Calgary Interior Painting for Your Needs
                  </h5>
                  <p className="card-text">{service?.description}</p>
                  <Button
                    size="sm"
                    variant="outline-light btn-primary  text-white border-white py-1 pl-2 d-flex align-items-center justify-content-between gap-4"
                    className="button-footer"
                    style={{ paddingLeft: "1.5rem" }}
                  >
                    {service?.buttonText}
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.40918"
                        width="31"
                        height="30"
                        rx="15"
                        fill="white"
                      />
                      <path
                        d="M22.5 9.40918C22.5 8.85689 22.0523 8.40918 21.5 8.40918L12.5 8.40918C11.9477 8.40918 11.5 8.85689 11.5 9.40918C11.5 9.96146 11.9477 10.4092 12.5 10.4092L20.5 10.4092L20.5 18.4092C20.5 18.9615 20.9477 19.4092 21.5 19.4092C22.0523 19.4092 22.5 18.9615 22.5 18.4092L22.5 9.40918ZM10.2071 22.1163L22.2071 10.1163L20.7929 8.70207L8.79289 20.7021L10.2071 22.1163Z"
                        fill="#0D378D"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    
    </Container>
  );
};

export default Index;

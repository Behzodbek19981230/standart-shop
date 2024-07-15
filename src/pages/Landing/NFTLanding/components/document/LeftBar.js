import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
} from "reactstrap";

export default function LeftBar() {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://api.ziyonet.uz/api/uz/library/categories-with-quantity"
    );
    const data = await response.json();
    setApiData(data?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <div className="d-flex align-items-center mb-2">
        <div className="flex-grow-1">
          <h2 className="mb-0 fw-semibold lh-base flex-grow-1">Sohalar</h2>
        </div>
      </div>
      <Card>
        <Accordion
          className="custom-accordionwithicon accordion-flush accordion-fill-primary"
          open={open}
          toggle={toggle}
        >
          {apiData?.map((item) => (
            <AccordionItem key={item.id}>
              <AccordionHeader targetId={`${item.id}`}>
                <div
                  className={
                    "w-100 d-flex justify-content-between align-items-center me-2"
                  }
                >
                  {item.name}
                  <span class="badge bg-info ms-1 fs-6">{item.total}</span>
                </div>
              </AccordionHeader>
              <AccordionBody accordionId={`${item.id}`} style={{ padding: 0 }}>
                <Card className="p-0">
                  <ul class="list-group list-group-flush p-0">
                    {item?.childrens?.map((child) => (
                      <li
                        class="list-group-item d-flex bg-soft-primary justify-content-between"
                        key={child.id}
                      >
                        {child.name}
                        <span class="badge bg-info ms-1 fs-6">
                          {child.total}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AccordionBody>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </React.Fragment>
  );
}

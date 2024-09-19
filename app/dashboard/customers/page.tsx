import React from "react";
import { customers } from "@/app/lib/placeholder-data";
import CustomersTable from "@/app/ui/customers/table";

const Page = () => {
  return (
    <CustomersTable
      customers={customers.map((c) => ({
        id: c.id,
        image_url: c.image_url,
        name: c.name,
        total_invoices: 100,
        total_paid: "300",
        total_pending: "23",
        email: c.email,
      }))}
    />
  );
};

export default Page;

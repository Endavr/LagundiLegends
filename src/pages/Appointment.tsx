import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-dropdown-select";

interface ServiceOption {
  value: string;
  label: string;
}

export default function App() {
  const [date, setDate] = useState<Date | null>(null);

  const service: ServiceOption[] = [
    { value: "Braces", label: "Braces" },
    { value: "Dental Fillings", label: "Dental Fillings" },
    { value: "Dentures", label: "Dentures" },
    { value: "Extraction", label: "Extraction" },
    { value: "Oral Prophylaxis", label: "Oral Prophylaxis" },
    { value: "Surgery", label: "Surgery" },
  ];

  return (
    <div className="bg-[#b4ccb4] h-screen w-screen flex flex-col gap-y-5 justify-center items-center">
      <div className="text-xl font-bold">Book Your Appointment</div>

      <div className="bg-white h-[300px] w-[300px] p-5 flex flex-col gap-y-5 justify-center rounded-md shadow-xl">
        <p className="font-semibold">Choose Your Date</p>
        <div>
          <DatePicker
            className="w-[260px] border-[1px] border-[#cccccc] rounded-sm p-2 text-sm"
            placeholderText="Select Date"
            selected={date}
            onChange={(date: Date | null) => setDate(date)}
            dateFormat="MMMM dd, yyyy"
          />
        </div>

        <p className="font-semibold">Choose Your Service</p>
        <div>
          <Select
            placeholder="Select Service"
            options={service}
          />
        </div>

        <div className="flex justify-center items-center pt-1">
          <button className="bg-[#cbd1cb] hover:bg-[#2c4c2c] hover:text-white w-[200px] px-2 py-3 rounded-md">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

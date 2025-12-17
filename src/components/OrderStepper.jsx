const OrderStepper = ({ status }) => {
  const steps = ["PLACED", "CONFIRMED", "SHIPPED", "DELIVERED"];
  const currentStep = steps.indexOf(status);

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Dots + Lines */}
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center w-full">
            {/* Circle */}
            <div
              className={`w-4 h-4 rounded-full border-[2px] border-yellow-800/50 ${
                index <= currentStep
                  ? "bg-yellow-900"
                  : "bg-yellow-800/3"
              }`}
            />

            {/* Line */}
            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-1 ${
                  index < currentStep
                    ? "bg-yellow-800/60"
                    : "bg-yellow-800/10"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Labels */}
      <div className="flex gap-21 text-sm text-yellow-900 font-semibold">
        {steps.map(step => (
          <span key={step}>{step}</span>
        ))}
      </div>
    </div>
  );
};

export default OrderStepper;

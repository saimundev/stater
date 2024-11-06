import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

type MoreInfoProps = {
  text:string;
}

const MoreInfo = ({text}:MoreInfoProps) => {
  return (
    <Alert className="-z-50 mt-4">
      <Terminal className="h-4 w-4" />
      <AlertTitle className="font-semibold">More Info!</AlertTitle>
      <AlertDescription className="text-base">
        {text}
      </AlertDescription>
    </Alert>
  );
};

export default MoreInfo;

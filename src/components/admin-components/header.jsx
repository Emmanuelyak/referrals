import { Button } from "@/components/ui/button";
export default function AdminHeader(props) {
  return (
    
    <div className="flex justify-between items-center mb-4">
    <div>
        <h6>{props?.header}</h6>
        <p>{props?.description}</p>
    </div>
    <div>
    <Button variant="outline" className="bg-blue-300 rounded-lg">{props.icons? <props.icons/> : null} {props.btnMessage}</Button>
    
  </div>  
</div>
  )
}
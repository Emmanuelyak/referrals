"use client"
import { Input, InputGroup, Button, ButtonToolbar } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';
import { AlignCenter } from 'lucide-react';

const styles = {
    width: 300,
  };
export default function AdminReferrals() {
  return (
    <div>
        <div className="flex justify-start gap-2 items-center">
      <div>
      <InputGroup inside style={styles}>
      <InputGroup.Addon>
        <SearchIcon />
      </InputGroup.Addon>
      <Input size="lg" />
    </InputGroup>
      </div>
    <div>
    <ButtonToolbar>
    <Button appearance="gost" color="red" className="bg-white">
      <AlignCenter/>
    </Button>
  </ButtonToolbar>
    </div>
        </div>
    </div>
  )
}
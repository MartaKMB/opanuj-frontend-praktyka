import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

function SwitchComponent() {
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="wcag-standards" mb="0">
        Czy ten switch jest zgodny ze standardami WCAG?
      </FormLabel>
      <Switch id="wcag-standards" />
    </FormControl>
  );
}

export default SwitchComponent;

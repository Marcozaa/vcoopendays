import { HStack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

const Tags = ({tagsWrk, setTagsWrk}) => {
    function rimuovi(valore){
        // Remove item with value from state
        var filteredArray = tagsWrk.filter(function(e) { return e !== valore })
        setTagsWrk([filteredArray])
    }

    return ( <div style={{width:'100%' , padding: '1rem', height: 'auto'}}>
        <HStack spacing={4}>
          
      {tagsWrk.map(tag => (
    <Tag
      size={'lg'}
      key={tag}
      borderRadius='full'
      variant='solid'
      colorScheme='green'
    >
      <TagLabel>{tag}</TagLabel>
      <TagCloseButton  onClick={()=>rimuovi(tag)}/>
    </Tag>
    
      ))}
  
</HStack>
    </div> );
}
 
export default Tags;
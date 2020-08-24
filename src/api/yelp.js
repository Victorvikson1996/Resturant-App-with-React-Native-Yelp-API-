  import axios from 'axios';





  export default axios.create({
      baseURL:'https://api.yelp.com/v3/businesses',
      headers: {
          Authorization: 'Bearer _R6U1T2m25B07OxYcxTu2qwTeaqvyEQVKVo5-jizULMbgUNYGpOXt9aixO9PSPPbZ88NPQym2NWJ4VTTbDsh9tdneBmTcLekU_OMERPLt153p-xGs_9x5-0zx9o5X3Yx'
      }
  });




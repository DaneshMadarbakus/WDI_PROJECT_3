angular
  .module('clementine')
  .service('randNameService', randNameService);



randNameFactory.$inject = [];
function randNameService(){
  const self = this;
  const adjectives = ['beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'wide-eyed', 'agreeable', 'brave', 'calm', 'delightful', 'eager','faithful', 'gentle', 'happy', 'jolly', 'kind', 'lively', 'nice', 'obedient', 'proud', 'relieved', 'silly', 'thankful', 'victorious', 'witty', 'zealous', 'ancient', 'brief', 'early', 'fast', 'late', 'long', 'modern', 'old', 'quick', 'rapid', 'short', 'slow', 'swift', 'young', 'bitter', 'delicious', 'fresh','greasy', 'juicy', 'hot', 'icy','loose', 'melted', 'nutritious', 'prickly', 'rainy', 'rotten', 'salty', 'sticky', 'strong', 'sweet', 'tart', 'tasteless', 'uneven', 'weak', 'wet', 'wooden','yummy'];

  const nouns = ['aardvark','albatross','alligator','alpaca','ant','anteater','antelope','ape','armadillo','donkey','baboon','badger','barracuda','bat','bear','beaver','bee','bison','boar','buffalo','butterfly','camel','capybara','caribou','cassowary','cat','caterpillar','cattle','chamois','cheetah','chicken','chimpanzee','chinchilla','chough','clam','cobra','cockroach','cod','cormorant','coyote','crab','crane','crocodile','crow','curlew','deer','dinosaur','dog','dogfish','dolphin','donkey','dotterel','dove','dragonfly','duck','dugong','dunlin','eagle','echidna','eel','eland','elephant','elephant-seal','elk','emu','falcon','ferret','finch','fish','flamingo','fly','fox','frog','gaur','gazelle','gerbil','giant-panda','giraffe','gnat','gnu','goat','goose','goldfinch','goldfish','gorilla','goshawk','grasshopper','grouse','guanaco','guinea-fowl','guinea-pig','gull','hamster','hare','hawk','hedgehog','heron','herring','hippopotamus','hornet','horse','human','hummingbird','hyena','ibex','ibis','jackal','jaguar','jay','jellyfish','kangaroo','kingfisher','koala','komodo-dragon','kookabura','kouprey','kudu','lapwing','lark','lemur','leopard','lion','llama','lobster','locust','loris','louse','lyrebird','magpie','mallard','manatee','mandrill','mantis','marten','meerkat','mink','mole','mongoose','monkey','moose','mouse','mosquito','mule','narwhal','newt','nightingale','octopus','okapi','opossum','oryx','ostrich','otter','owl','ox','oyster','panther','parrot','partridge','peafowl','pelican','penguin','pheasant','pig','pigeon','polar-bear','pony','porcupine','porpoise','prairie-dog','quail','quelea','quetzal','rabbit','raccoon','rail','ram','rat','raven','red-deer','red-panda','reindeer','rhinoceros','rook','salamander','salmon','sand-dollar','sandpiper','sardine','scorpion','sea-lion','sea-urchin','seahorse','seal','shark','sheep','shrew','skunk','snail','snake','sparrow','spider','spoonbill','squid','squirrel','starling','stingray','stinkbug','stork','swallow','swan','tapir','tarsier','termite','tiger','toad','trout','turkey','turtle','vicuña','viper','vulture','wallaby','walrus','wasp','water-buffalo','weasel','whale','wolf','wolverine','wombat','woodcock','woodpecker','worm','wren','yak','zebra'];

  function randomElement(array){
    var i = Math.floor(Math.random() * array.length);
    return array[i];
  }
  self.rndName = () => {
    return randomElement(adjectives) + ' ' + randomElement(nouns);
  };
}

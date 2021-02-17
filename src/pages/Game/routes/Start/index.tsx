import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../../../../components/Layout/index.js';
import PokemonCard from '../../../../components/PokemonCard/index.js';
import { FireBaseContext } from 'src/components/context/firebaseContext.js';
import { PokemonContext } from 'src/components/context/pokemonContext.js';
import { StartPageStyled } from './styles'
import { StartProps } from './interfaces.js';
// import s from './style.module.css';




const StartPage: React.FC<StartProps> = () => {
    const firebase = useContext(FireBaseContext); 
    const pokemonsContext = useContext(PokemonContext)
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});
    // console.log('####: Firebase', firebase)


    useEffect(() => {
      firebase.getPokemonSocet((pokemons) => {
        setPokemons(pokemons);
        });
        
        // return () => firebase.offPokemonSocet();
    }, []);
    


    const handleChangeSelected = (key) => {
      const pokemon = {...pokemons[key]};
      pokemonsContext.onSelectedPokemons(key, pokemon);


      setPokemons(prevState => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          selected: !prevState[key].selected,
        }
      }))

    };

    const handleStartGameClick = () => {
      history.push('/game/board');
    }


   

  return (
    <StartPageStyled>
      <Layout id={2}  
        title='Layout 2 title' 
        descr='description' 
        colorBg='#777' >
      <button className={"button"} 
      onClick={handleStartGameClick}
      disabled={Object.keys(pokemonsContext.pokemons).length < 5}>Start Game</button>
      <div className={"flex"}>
          {
            Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) => <PokemonCard 
            className={"card"}
            isActive={true}
            key={key}
            id={id}
            name={name}
            img={img}
            type={type}
            values={values}
            isSelected={selected}
            onClickCard={() => {
              if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) { handleChangeSelected(key) }
          }}
          />)}
        </div>
      </Layout>
    </StartPageStyled>
  );
};


export default StartPage;
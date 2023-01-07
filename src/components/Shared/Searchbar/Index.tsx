import '../Searchbar/searchbar.scss'
import Input from '../Input'
import SearchIcon from '../../Icons/SearchIcon'


const Index = () => {
    return (
        <Input
            placeholder={'Search for anything'}
            component__wrap={'search__group'}
            input__class={'search__input_style'}
            variable_x={<SearchIcon />}
        />
    )
}

export default Index
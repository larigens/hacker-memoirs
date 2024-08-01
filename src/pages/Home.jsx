/* eslint-disable react/prop-types */
import { useState, useMemo } from 'react';
import data from '../data/index';
import { FormComponent } from '../components/Form';
import logo from '../assets/logo.png';
import { Container, Form, Col, Row, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const welcome = {
    greetings: 'Hello',
    title: 'World',
};

const developers = ['Larissa', 'Jonathan', 'Erick', 'Sarah'];

const Home = () => {
    const commandData = useMemo(() => Object.values(data), []);

    return (
        <Container fluid>
            <Header />
            <Container fluid className='d-flex'>
                <DeveloperSearch />
                <TechTermSearch commandData={commandData} />
                <CommandCards commandData={commandData} />
                <FormComponent />
            </Container>
        </Container>
    );
};

const Header = () => {
    return (
        <Container fluid className='d-flex align-items-center m-1 p-1'>
            <Image src={logo} width={100} className='radius-20 me-2' />
            <h1>
                {welcome.greetings} {welcome.title}
            </h1>
        </Container>
    )
};

const DeveloperSearch = () => {
    const [devName, setDevName] = useState('');
    const [searchedDev, setSearchedDev] = useState('');
    const [description, setDescription] = useState('');

    const handleFormSubmission = (e) => {
        e.preventDefault();
        const foundDev = developers.find((developer) => developer.toLowerCase().includes(devName.toLowerCase()));
        setSearchedDev(foundDev || '');
        setDescription(foundDev ? 'is a developer!' : 'is not a developer!');
    };

    return (
        <Form onSubmit={handleFormSubmission}>
            <Form.Label htmlFor='searchDev'>Search a developer:</Form.Label>
            <Form.Control
                id='searchDev'
                type='text'
                value={devName}
                onChange={(e) => setDevName(e.target.value)}
            />
            <Button type="submit">Submit</Button>
            <h2>{searchedDev ? `${searchedDev} ${description}` : `${devName} ${description}`}</h2>
        </Form>
    )
};

// eslint-disable-next-line react/prop-types
const TechTermSearch = ({ commandData }) => {
    const [term, setTerm] = useState('');
    const [searchedTerm, setSearchedTerm] = useState([]);


    const handleInputChange = (e) => {
        const newTerm = e.target.value;
        setTerm(newTerm);
        const terms = commandData.map(item => item.title);
        const foundTerm = terms.filter(t => t.toLowerCase().includes(newTerm.toLowerCase()));
        setSearchedTerm(foundTerm);
    };
    return (
        <Container fluid>
            <Row className="mt-2 mb-5 d-flex justify-content-center">
                <Form>
                    <Form.Label htmlFor='searchTerm'>Search a term in tech:</Form.Label>
                    <Form.Control
                        id='searchTerm'
                        type='text'
                        value={term}
                        onChange={handleInputChange}
                    />
                    {searchedTerm.length > 0 ? (
                        searchedTerm.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))
                    ) : (
                        <p>No Results</p>
                    )}
                </Form>
            </Row>
        </Container>
    )
};

const CommandCards = ({ commandData }) => {
    return (
        <Row className="p-4 d-flex justify-content-center align-items-center">
            {commandData.map((item, index) => (
                <Link to={item.link} key={index} className="text-decoration-none">
                    <Col md={6} className="text-center m-3 ms-4 p-2 glassmorphism radius-20">
                        <Container fluid className='p-1'>
                            <p className="my-2 text-center secondary-color fs-5">{item.title}</p>
                        </Container>
                    </Col>
                </Link>
            ))}
        </Row>
    )
};

export default Home;

import React from 'react';
import PropTypes from 'prop-types';
import Icon24Message from '@vkontakte/icons/dist/24/message';
import Icon24Coins from '@vkontakte/icons/dist/24/coins';
import Icon24MoneyCircle from '@vkontakte/icons/dist/24/money_circle';
import { Panel, PanelHeader, Group, Cell, Avatar, Separator, Counter, List } from "@vkontakte/vkui";

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Профиль</PanelHeader>

		<Group>
			<center><Avatar src="http://foodbank.bradfrostweb.com/patternlab/v1/images/fpo_avatar.png" size={80}></Avatar></center>
			<center><Cell><b>Имя Фамилия</b></Cell></center>
		</Group>
		<Separator />
		<Group>
			<List>
			<Cell before={<Icon24Message />} indicator={<Counter type="primary">n</Counter>}>Сообщения</Cell>
			<Cell before={<Icon24Coins />} indicator={<Counter type="primary">n</Counter>}>Монеты</Cell>
			<Cell before={<Icon24MoneyCircle />} indicator={<Counter type="primary">n</Counter>}>Монеты в банке</Cell>
			</List>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;

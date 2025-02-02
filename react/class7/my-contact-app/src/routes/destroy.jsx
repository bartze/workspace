import { redirect } from 'react-router-dom';
import { deleteContact } from '../contacts';

export async function action({ params }) {
	if (!params.contactId) {
		throw new Error('oh dang!');
	}
	await deleteContact(params.contactId);
	return redirect('/');
}

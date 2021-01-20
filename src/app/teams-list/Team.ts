export class Team {

	/**
	 * The team name;
	 */
	public name: string;

	/**
	 * Whether a team has been extracted already.
	 */
	public extracted: boolean;

	constructor(name: string)
	{
		this.name = name;
		this.extracted = false;
	}
}

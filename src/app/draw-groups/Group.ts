export class Group {
	public get teams(): string[]
	{
		return this._teams;
	}

	public set teams(value: string[])
	{
		this._teams = value;
	}

	private _teams: string[];
}

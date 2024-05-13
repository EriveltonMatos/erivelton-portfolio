type TechBadgeProps = {
    name: string;
}

export const TechBadge = ({name}: TechBadgeProps) => {
    return (
        <span className="corSecundaria bg-violet-900  text-sm py-1 px-3 rounded-lg bord">
            {name}
        </span>
    )
}
import { CategoryListSuccessResponse } from "@/types/ApiResponseType";

export default function ByActivities({
  uniqueActivities,
  filter,
  handleCheckboxChange,
}: any) {
  return (
    <>
      <div className="box-collapse scrollFilter">
        <ul className="list-filter-checkbox">
          {uniqueActivities.map((activity: CategoryListSuccessResponse) => (
            <li key={activity.id}>
              <label className="cb-container">
                <input
                  type="checkbox"
                  checked={filter.activities.includes(activity.name)}
                  onChange={handleCheckboxChange("activities", [
                    activity.name,
                    ...activity.subCategories.map((s) => s.name),
                  ])}
                />

                <span className="text-sm-medium">{activity.name} </span>
                <span className="checkmark" />
              </label>
              <span className="number-item">{activity?.tourCount}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

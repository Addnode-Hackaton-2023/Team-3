using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Backend.Models;

public partial class RouteStop
{
    public Guid RouteId { get; set; }

    public Guid StopId { get; set; }

    public int Ordinal { get; set; }

    [JsonIgnore]
    public virtual Route Route { get; set; } = null!;

    public virtual Stop Stop { get; set; } = null!;
}

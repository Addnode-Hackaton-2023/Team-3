using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Route
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public Guid? VehicleId { get; set; }

    public virtual ICollection<Driving> Drivings { get; set; } = new List<Driving>();

    public virtual ICollection<RouteStop> RouteStops { get; set; } = new List<RouteStop>();

    public virtual Vehicle? Vehicle { get; set; }
}

using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Vehicle
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Driving> Drivings { get; set; } = new List<Driving>();

    public virtual ICollection<Route> Routes { get; set; } = new List<Route>();
}

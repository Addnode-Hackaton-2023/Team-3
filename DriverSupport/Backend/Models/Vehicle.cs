using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Backend.Models;

public partial class Vehicle
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    [JsonIgnore]
    public virtual ICollection<Driving> Drivings { get; set; } = new List<Driving>();

    [JsonIgnore]
    public virtual ICollection<Route> Routes { get; set; } = new List<Route>();
}
